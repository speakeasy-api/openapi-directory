package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type Operations struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewOperations(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Operations {
	return &Operations{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet - Flight Status at Arrival Airport
// Status of all arrivals at a given airport up to 4 hours from the provided date time.
func (s *Operations) OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet(ctx context.Context, request operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetRequest) (*operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/operations/flightstatus/arrivals/{airportCode}/{fromDateTime}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetResponse{
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

			res.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// OperationsFlightstatusByFlightNumberAndDateGet - Flight Status
// Status of a particular flight (boarding, delayed, etc.).
func (s *Operations) OperationsFlightstatusByFlightNumberAndDateGet(ctx context.Context, request operations.OperationsFlightstatusByFlightNumberAndDateGetRequest) (*operations.OperationsFlightstatusByFlightNumberAndDateGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/operations/flightstatus/{flightNumber}/{date}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.OperationsFlightstatusByFlightNumberAndDateGetResponse{
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

			res.OperationsFlightstatusByFlightNumberAndDateGet200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet - Flight Status at Departure Airport
// Status of all departures from a given airport up to 4 hours from the provided date time.
func (s *Operations) OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet(ctx context.Context, request operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest) (*operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/operations/flightstatus/departures/{airportCode}/{fromDateTime}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse{
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

			res.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// OperationsFlightstatusRouteDateByOriginAndDestinationGet - Flight Status by Route
// Status of flights between a given origin and destination on a given date.
func (s *Operations) OperationsFlightstatusRouteDateByOriginAndDestinationGet(ctx context.Context, request operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest) (*operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/operations/flightstatus/route/{origin}/{destination}/{date}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse{
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

			res.OperationsFlightstatusRouteDateByOriginAndDestinationGet200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// OperationsSchedulesFromDateTimeByOriginAndDestinationGet - Flight Schedules
// Scheduled flights between given airports on a given date.
func (s *Operations) OperationsSchedulesFromDateTimeByOriginAndDestinationGet(ctx context.Context, request operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest) (*operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/operations/schedules/{origin}/{destination}/{fromDateTime}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse{
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

			res.OperationsSchedulesFromDateTimeByOriginAndDestinationGet200ApplicationJSONObject = out
		}
	}

	return res, nil
}
