package operations

import (
	"openapi/pkg/models/shared"
)

type GetFeaturePathParams struct {
	FeatureID string `pathParam:"style=simple,explode=false,name=featureId"`
}

type GetFeatureSecurity struct {
	Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}

type GetFeatureRequest struct {
	PathParams GetFeaturePathParams
	Security   GetFeatureSecurity
}

type GetFeatureResponse struct {
	ContentType                        string
	StatusCode                         int64
	GetFeature200ApplicationJSONObject map[string]interface{}
}
