package operations

import (
	"openapi/pkg/models/shared"
)

type ListAssetsQueryParams struct {
	Aliases      *bool   `queryParam:"style=form,explode=true,name=aliases"`
	Limit        *int32  `queryParam:"style=form,explode=true,name=limit"`
	UpdatedAfter *string `queryParam:"style=form,explode=true,name=updatedAfter"`
}

type ListAssetsSecurity struct {
	Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}

type ListAssetsRequest struct {
	QueryParams ListAssetsQueryParams
	Security    ListAssetsSecurity
}

type ListAssetsResponse struct {
	ContentType                        string
	StatusCode                         int64
	ListAssets200ApplicationJSONObject map[string]interface{}
}
