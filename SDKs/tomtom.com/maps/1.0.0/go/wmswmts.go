package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type WmsWmts struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewWmsWmts(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *WmsWmts {
	return &WmsWmts{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetCapabilities - GetCapabilities
// The GetCapabilities call is part of TomTom's implementation of version 1.1.1
// the Web Map Service (WMS). It provides descriptions of the other calls
// that are available in the implementation.
func (s *WmsWmts) GetCapabilities(ctx context.Context, request operations.GetCapabilitiesRequest) (*operations.GetCapabilitiesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/map/{versionNumber}/wms//", request.PathParams)

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

	res := &operations.GetCapabilitiesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 202:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetMap - GetMap
// The GetMap call implements the Web Map Service 1.1.1 standard
// to access TomTom raster map tiles. This service is described
// in the response to the GetCapabilities API call.
func (s *WmsWmts) GetMap(ctx context.Context, request operations.GetMapRequest) (*operations.GetMapResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/map/{versionNumber}/wms/", request.PathParams)

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

	res := &operations.GetMapResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 202:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXML - WMTS
// The WMTS GetCapabilities call implements version 1.0.0 of
// the <a href="http://www.opengeospatial.org/standards/wmts">Web Map Tile Service</a>
// (WMTS) standard. It returns metadata that allows compatible calling systems to construct
// calls to TomTom's raster map tile service. See the
// <a href="/maps-api/maps-api-documentation-raster/wmts">documentation</a>
// for more information on WMTS.
func (s *WmsWmts) GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXML(ctx context.Context, request operations.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLRequest) (*operations.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/map/{versionNumber}/wmts/{key}/{wmtsVersion}/WMTSCapabilities.xml", request.PathParams)

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

	res := &operations.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}
