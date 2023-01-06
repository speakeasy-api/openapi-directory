package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
	"strings"
)

type MarketData struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewMarketData(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *MarketData {
	return &MarketData{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetMarketdataExchangeComponents - Exchange Components
// This endpoint provides a bit mapping for the bid/ask/last 'market' values in the snapshot response.
func (s *MarketData) GetMarketdataExchangeComponents(ctx context.Context) (*operations.GetMarketdataExchangeComponentsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/marketdata/exchange_components"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMarketdataExchangeComponentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []operations.GetMarketdataExchangeComponents200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetMarketdataExchangeComponents200ApplicationJSONObjects = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 408:
	}

	return res, nil
}

// GetMarketdataSnapshot - Market Data Snapshot
// This endpoint allows the consumer to request a market data snapshot for one or more trading products.
// Consumers need to provide unique identifiers (conids) for the products in the IB product database (retrievable using the /secdef endpoint). The 'market' values are integers whose bits indicate the exchange(s) making up the quote.
//
// The mapping of bit to exchange is obtained from the marketdata/exchange_component endpoint. For example, if a bid has a 'market' value of 5 and the exchange_component result has the map
// 0 => NYSE, 1 => ISLAND, 2 => ARCA then the exchanges contributing to the bid size are NYSE and ARCA.
//
// Similarly, if market=2, then only ISLAND is contributing.
func (s *MarketData) GetMarketdataSnapshot(ctx context.Context, request operations.GetMarketdataSnapshotRequest) (*operations.GetMarketdataSnapshotResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/marketdata/snapshot"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "GET", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMarketdataSnapshotResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []operations.GetMarketdataSnapshot200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetMarketdataSnapshot200ApplicationJSONObjects = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 408:
	}

	return res, nil
}
