package operations

import (
	"openapi/pkg/models/shared"
)

type ListPlatformsQueryParams struct {
	Aliases *bool `queryParam:"style=form,explode=true,name=aliases"`
}

type ListPlatformsSecurity struct {
	Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}

type ListPlatformsRequest struct {
	QueryParams ListPlatformsQueryParams
	Security    ListPlatformsSecurity
}

type ListPlatformsResponse struct {
	ContentType                           string
	StatusCode                            int64
	ListPlatforms200ApplicationJSONObject map[string]interface{}
}
