package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type ReverseGeocoding struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewReverseGeocoding(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *ReverseGeocoding {
	return &ReverseGeocoding{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetSearchVersionNumberReverseGeocodeCrossStreetPositionExt - Cross Street lookup
func (s *ReverseGeocoding) GetSearchVersionNumberReverseGeocodeCrossStreetPositionExt(ctx context.Context, request operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest) (*operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/search/{versionNumber}/reverseGeocode/crossStreet/{position}.{ext}", request.PathParams)

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

	res := &operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 596:
	case httpRes.StatusCode >= 500 && httpRes.StatusCode < 600:
	}

	return res, nil
}

// GetSearchVersionNumberReverseGeocodePositionExt - Reverse Geocode
func (s *ReverseGeocoding) GetSearchVersionNumberReverseGeocodePositionExt(ctx context.Context, request operations.GetSearchVersionNumberReverseGeocodePositionExtRequest) (*operations.GetSearchVersionNumberReverseGeocodePositionExtResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/search/{versionNumber}/reverseGeocode/{position}.{ext}", request.PathParams)

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

	res := &operations.GetSearchVersionNumberReverseGeocodePositionExtResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 596:
	case httpRes.StatusCode >= 500 && httpRes.StatusCode < 600:
	}

	return res, nil
}
