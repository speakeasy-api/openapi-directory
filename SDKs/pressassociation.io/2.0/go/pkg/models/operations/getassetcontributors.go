package operations

import (
	"openapi/pkg/models/shared"
)

type GetAssetContributorsPathParams struct {
	AssetID string `pathParam:"style=simple,explode=false,name=assetId"`
}

type GetAssetContributorsQueryParams struct {
	Aliases *bool `queryParam:"style=form,explode=true,name=aliases"`
}

type GetAssetContributorsSecurity struct {
	Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}

type GetAssetContributorsRequest struct {
	PathParams  GetAssetContributorsPathParams
	QueryParams GetAssetContributorsQueryParams
	Security    GetAssetContributorsSecurity
}

type GetAssetContributorsResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	GetAssetContributors200ApplicationJSONObject map[string]interface{}
}
