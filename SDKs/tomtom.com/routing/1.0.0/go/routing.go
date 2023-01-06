package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type Routing struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewRouting(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Routing {
	return &Routing{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetRoutingVersionNumberCalculateReachableRangeOriginContentType - Reachable Range
// Calculates a set of locations that can be reached from the origin point.
func (s *Routing) GetRoutingVersionNumberCalculateReachableRangeOriginContentType(ctx context.Context, request operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest) (*operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/routing/{versionNumber}/calculateReachableRange/{origin}/{contentType}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 408:
	case httpRes.StatusCode == 414:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	case httpRes.StatusCode == 504:
	case httpRes.StatusCode == 596:
	}

	return res, nil
}

// GetRoutingVersionNumberCalculateRouteLocationsContentType - Calculate Route
// Calculates a route between an origin and a destination.
func (s *Routing) GetRoutingVersionNumberCalculateRouteLocationsContentType(ctx context.Context, request operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeRequest) (*operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/routing/{versionNumber}/calculateRoute/{locations}/{contentType}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 408:
	case httpRes.StatusCode == 414:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	case httpRes.StatusCode == 504:
	case httpRes.StatusCode == 596:
	}

	return res, nil
}

// PostRoutingVersionNumberCalculateReachableRangeOriginContentType - Reachable Range
// Calculates a set of locations that can be reached from the origin point. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.
func (s *Routing) PostRoutingVersionNumberCalculateReachableRangeOriginContentType(ctx context.Context, request operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest) (*operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/routing/{versionNumber}/calculateReachableRange/{origin}/{contentType}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 408:
	case httpRes.StatusCode == 414:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	case httpRes.StatusCode == 504:
	case httpRes.StatusCode == 596:
	}

	return res, nil
}

// PostRoutingVersionNumberCalculateRouteLocationsContentType - Calculate Route
// Calculates a route between an origin and a destination. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.
func (s *Routing) PostRoutingVersionNumberCalculateRouteLocationsContentType(ctx context.Context, request operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequest) (*operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/routing/{versionNumber}/calculateRoute/{locations}/{contentType}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 408:
	case httpRes.StatusCode == 414:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	case httpRes.StatusCode == 504:
	case httpRes.StatusCode == 596:
	}

	return res, nil
}
