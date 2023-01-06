package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelPathParams struct {
	ChannelID string `pathParam:"style=simple,explode=false,name=channelId"`
}

type GetChannelQueryParams struct {
	Aliases *bool `queryParam:"style=form,explode=true,name=aliases"`
}

type GetChannelSecurity struct {
	Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}

type GetChannelRequest struct {
	PathParams  GetChannelPathParams
	QueryParams GetChannelQueryParams
	Security    GetChannelSecurity
}

type GetChannelResponse struct {
	ContentType                        string
	StatusCode                         int64
	GetChannel200ApplicationJSONObject map[string]interface{}
}
