package operations

import (
	"openapi/pkg/models/shared"
)

type ListScheduleQueryParams struct {
	Aliases   *bool   `queryParam:"style=form,explode=true,name=aliases"`
	ChannelID string  `queryParam:"style=form,explode=true,name=channelId"`
	End       *string `queryParam:"style=form,explode=true,name=end"`
	Start     string  `queryParam:"style=form,explode=true,name=start"`
}

type ListScheduleSecurity struct {
	Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}

type ListScheduleRequest struct {
	QueryParams ListScheduleQueryParams
	Security    ListScheduleSecurity
}

type ListScheduleResponse struct {
	ContentType                          string
	StatusCode                           int64
	ListSchedule200ApplicationJSONObject map[string]interface{}
}
