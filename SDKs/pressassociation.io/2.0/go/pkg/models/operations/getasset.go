package operations

import (
	"openapi/pkg/models/shared"
)

type GetAssetPathParams struct {
	AssetID string `pathParam:"style=simple,explode=false,name=assetId"`
}

type GetAssetQueryParams struct {
	Aliases *bool `queryParam:"style=form,explode=true,name=aliases"`
}

type GetAssetSecurity struct {
	Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}

type GetAssetRequest struct {
	PathParams  GetAssetPathParams
	QueryParams GetAssetQueryParams
	Security    GetAssetSecurity
}

type GetAssetResponse struct {
	ContentType                      string
	StatusCode                       int64
	GetAsset200ApplicationJSONObject map[string]interface{}
}
