package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
)

type ReferenceData struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewReferenceData(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *ReferenceData {
	return &ReferenceData{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// ReferencesAircraftByAircraftCodeGet - Aircraft
// List all aircraft types or one specific aircraft type.
func (s *ReferenceData) ReferencesAircraftByAircraftCodeGet(ctx context.Context, request operations.ReferencesAircraftByAircraftCodeGetRequest) (*operations.ReferencesAircraftByAircraftCodeGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/references/aircraft/{aircraftCode}", request.PathParams)

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

	res := &operations.ReferencesAircraftByAircraftCodeGetResponse{
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

			res.ReferencesAircraftByAircraftCodeGet200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ReferencesAirlinesByAirlineCodeGet - Airlines
// List all airlines or one specific airline.
func (s *ReferenceData) ReferencesAirlinesByAirlineCodeGet(ctx context.Context, request operations.ReferencesAirlinesByAirlineCodeGetRequest) (*operations.ReferencesAirlinesByAirlineCodeGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/references/airlines/{airlineCode}", request.PathParams)

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

	res := &operations.ReferencesAirlinesByAirlineCodeGetResponse{
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

			res.ReferencesAirlinesByAirlineCodeGet200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ReferencesAirportsByAirportCodeGet - Airports
// List all airports or one specific airport. All airports response is very large. It is possible to request the response in a specific language.
func (s *ReferenceData) ReferencesAirportsByAirportCodeGet(ctx context.Context, request operations.ReferencesAirportsByAirportCodeGetRequest) (*operations.ReferencesAirportsByAirportCodeGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/references/airports/{airportCode}", request.PathParams)

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

	res := &operations.ReferencesAirportsByAirportCodeGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AirportResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AirportResponse = out
		}
	}

	return res, nil
}

// ReferencesAirportsNearestByLatitudeAndLongitudeGet - Nearest Airports
// List the 5 closest airports to the given latitude and longitude, irrespective of the radius of the reference point.
func (s *ReferenceData) ReferencesAirportsNearestByLatitudeAndLongitudeGet(ctx context.Context, request operations.ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest) (*operations.ReferencesAirportsNearestByLatitudeAndLongitudeGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/references/airports/nearest/{latitude},{longitude}", request.PathParams)

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

	res := &operations.ReferencesAirportsNearestByLatitudeAndLongitudeGetResponse{
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

			res.ReferencesAirportsNearestByLatitudeAndLongitudeGet200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ReferencesCitiesByCityCodeGet - Cities
// List all cities or one specific city. It is possible to request the response in a specific language.
func (s *ReferenceData) ReferencesCitiesByCityCodeGet(ctx context.Context, request operations.ReferencesCitiesByCityCodeGetRequest) (*operations.ReferencesCitiesByCityCodeGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/references/cities/{cityCode}", request.PathParams)

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

	res := &operations.ReferencesCitiesByCityCodeGetResponse{
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

			res.ReferencesCitiesByCityCodeGet200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ReferencesCountriesByCountryCodeGet - Countries
// List all countries or one specific country. It is possible to request the response in a specific language.
func (s *ReferenceData) ReferencesCountriesByCountryCodeGet(ctx context.Context, request operations.ReferencesCountriesByCountryCodeGetRequest) (*operations.ReferencesCountriesByCountryCodeGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/references/countries/{countryCode}", request.PathParams)

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

	res := &operations.ReferencesCountriesByCountryCodeGetResponse{
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

			res.ReferencesCountriesByCountryCodeGet200ApplicationJSONObject = out
		}
	}

	return res, nil
}
