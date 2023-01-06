package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type Copyrights struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCopyrights(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Copyrights {
	return &Copyrights{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetMapVersionNumberCopyrightsFormat - Copyrights whole world
// The Copyrights API returns copyright information for
// the Maps API Raster Tile Service in JSON, JSONP, or XML format.
// This call returns copyright information for the whole world.
func (s *Copyrights) GetMapVersionNumberCopyrightsFormat(ctx context.Context, request operations.GetMapVersionNumberCopyrightsFormatRequest) (*operations.GetMapVersionNumberCopyrightsFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/map/{versionNumber}/copyrights.{format}", request.PathParams)

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

	res := &operations.GetMapVersionNumberCopyrightsFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 410:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetMapVersionNumberCopyrightsCaptionFormat - Captions
// This API returns copyright captions for the map service.
func (s *Copyrights) GetMapVersionNumberCopyrightsCaptionFormat(ctx context.Context, request operations.GetMapVersionNumberCopyrightsCaptionFormatRequest) (*operations.GetMapVersionNumberCopyrightsCaptionFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/map/{versionNumber}/copyrights/caption.{format}", request.PathParams)

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

	res := &operations.GetMapVersionNumberCopyrightsCaptionFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 410:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat - Copyrights bounding box
// The Copyrights API returns copyright information for
// the Maps API Raster Tile Service in JSON, JSONP, or XML format.
// This call returns copyright information for a specific bounding box.
func (s *Copyrights) GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat(ctx context.Context, request operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRequest) (*operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/map/{versionNumber}/copyrights/{minLon}/{minLat}/{maxLon}/{maxLat}.{format}", request.PathParams)

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

	res := &operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 410:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetMapVersionNumberCopyrightsZoomXYFormat - Copyrights tile
// The Copyrights API returns copyright information for
// the Maps API Raster Tile Service in JSON, JSONP, or XML format.
// This call returns copyright information for the a specific map tile.
func (s *Copyrights) GetMapVersionNumberCopyrightsZoomXYFormat(ctx context.Context, request operations.GetMapVersionNumberCopyrightsZoomXYFormatRequest) (*operations.GetMapVersionNumberCopyrightsZoomXYFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/map/{versionNumber}/copyrights/{zoom}/{X}/{Y}.{format}", request.PathParams)

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

	res := &operations.GetMapVersionNumberCopyrightsZoomXYFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 410:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}
