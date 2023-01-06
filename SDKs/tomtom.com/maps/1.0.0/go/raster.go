package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type Raster struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewRaster(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Raster {
	return &Raster{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetMapVersionNumberStaticimage - Static Image
// The Static Image service renders a rectangular raster image
// in the style, size, and zoom level specified. The image can be requested
// using either a center point plus width and height or a bounding box.
func (s *Raster) GetMapVersionNumberStaticimage(ctx context.Context, request operations.GetMapVersionNumberStaticimageRequest) (*operations.GetMapVersionNumberStaticimageResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/map/{versionNumber}/staticimage", request.PathParams)

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

	res := &operations.GetMapVersionNumberStaticimageResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetMapVersionNumberTileLayerStyleZoomXYFormat - Tile
// The Maps API Raster Service delivers raster tiles, which are representations of square sections of map data.
func (s *Raster) GetMapVersionNumberTileLayerStyleZoomXYFormat(ctx context.Context, request operations.GetMapVersionNumberTileLayerStyleZoomXYFormatRequest) (*operations.GetMapVersionNumberTileLayerStyleZoomXYFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/map/{versionNumber}/tile/{layer}/{style}/{zoom}/{X}/{Y}.{format}", request.PathParams)

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

	res := &operations.GetMapVersionNumberTileLayerStyleZoomXYFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 302:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 410:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}
