package operations

import (
	"openapi/pkg/models/shared"
)

type ListPlatformRegionsPathParams struct {
	PlatformID string `pathParam:"style=simple,explode=false,name=platformId"`
}

type ListPlatformRegionsQueryParams struct {
	Aliases *bool `queryParam:"style=form,explode=true,name=aliases"`
}

type ListPlatformRegionsSecurity struct {
	Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}

type ListPlatformRegionsRequest struct {
	PathParams  ListPlatformRegionsPathParams
	QueryParams ListPlatformRegionsQueryParams
	Security    ListPlatformRegionsSecurity
}

type ListPlatformRegionsResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	ListPlatformRegions200ApplicationJSONObject map[string]interface{}
}
