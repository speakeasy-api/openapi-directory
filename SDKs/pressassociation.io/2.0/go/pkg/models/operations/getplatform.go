package operations

import (
	"openapi/pkg/models/shared"
)

type GetPlatformPathParams struct {
	PlatformID string `pathParam:"style=simple,explode=false,name=platformId"`
}

type GetPlatformSecurity struct {
	Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}

type GetPlatformRequest struct {
	PathParams GetPlatformPathParams
	Security   GetPlatformSecurity
}

type GetPlatformResponse struct {
	ContentType                         string
	StatusCode                          int64
	GetPlatform200ApplicationJSONObject map[string]interface{}
}
