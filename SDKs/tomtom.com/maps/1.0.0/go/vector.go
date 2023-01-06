package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type Vector struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewVector(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Vector {
	return &Vector{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetMapVersionNumberTileLayerStyleZoomXYPbf - Tile
// The Maps API Vector Service delivers vector tiles, which are representations of square sections of map data.
func (s *Vector) GetMapVersionNumberTileLayerStyleZoomXYPbf(ctx context.Context, request operations.GetMapVersionNumberTileLayerStyleZoomXYPbfRequest) (*operations.GetMapVersionNumberTileLayerStyleZoomXYPbfResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/map/{versionNumber}/tile/{layer}/{style}/{zoom}/{X}/{Y}.pbf", request.PathParams)

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

	res := &operations.GetMapVersionNumberTileLayerStyleZoomXYPbfResponse{
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
