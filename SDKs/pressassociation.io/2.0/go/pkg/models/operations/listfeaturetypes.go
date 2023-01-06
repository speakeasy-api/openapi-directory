package operations

import (
	"openapi/pkg/models/shared"
)

type ListFeatureTypesSecurity struct {
	Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}

type ListFeatureTypesRequest struct {
	Security ListFeatureTypesSecurity
}

type ListFeatureTypesResponse struct {
	ContentType                              string
	StatusCode                               int64
	ListFeatureTypes200ApplicationJSONObject map[string]interface{}
}
