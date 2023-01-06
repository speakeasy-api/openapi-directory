package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type Cargo struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCargo(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Cargo {
	return &Cargo{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CargoGetRouteFromDateProductCodeByOriginAndDestinationGet - Retrieve all flights
// Retrieve a list of all possible flights (both direct and connecting) between two airports on a given date. Routes are available for today and up to days in the future.
func (s *Cargo) CargoGetRouteFromDateProductCodeByOriginAndDestinationGet(ctx context.Context, request operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest) (*operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/cargo/getRoute/{origin}-{destination}/{fromDate}/{productCode}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CargoGetRouteFromDateProductCodeByOriginAndDestinationGet200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// CargoShipmentTrackingByAwbPrefixAndAwbNumberGet - Shipment Tracking
// With this tracking service you can easily retrieve your shipment or flight status information.
func (s *Cargo) CargoShipmentTrackingByAwbPrefixAndAwbNumberGet(ctx context.Context, request operations.CargoShipmentTrackingByAwbPrefixAndAwbNumberGetRequest) (*operations.CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/cargo/shipmentTracking/{aWBPrefix}-{aWBNumber}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CargoShipmentTrackingByAWBPrefixAndAWBNumberGet200ApplicationJSONObject = out
		}
	}

	return res, nil
}
