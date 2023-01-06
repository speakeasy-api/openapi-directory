package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type OrderMarginRequirements struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewOrderMarginRequirements(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *OrderMarginRequirements {
	return &OrderMarginRequirements{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// PostAccountsAccountOrderImpact - Return margin impact info
// This endpoint allows the consumer to check the impact that an order would have on the account, including margin, NLV and estimated commission costs.
// To specify the contract, you provide a value for the ContractId field, OR Ticker/ListingExchange/InstrumentType=STK for stocks OR Ticker/Currency/InstrumentType=CASH for FX.
func (s *OrderMarginRequirements) PostAccountsAccountOrderImpact(ctx context.Context, request operations.PostAccountsAccountOrderImpactRequest) (*operations.PostAccountsAccountOrderImpactResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{account}/order_impact", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
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

	res := &operations.PostAccountsAccountOrderImpactResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostAccountsAccountOrderImpact200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostAccountsAccountOrderImpact200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 202:
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 408:
	}

	return res, nil
}
