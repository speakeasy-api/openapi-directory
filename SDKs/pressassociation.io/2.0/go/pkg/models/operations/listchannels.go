package operations

import (
	"openapi/pkg/models/shared"
)

type ListChannelsQueryParams struct {
	Aliases              *bool   `queryParam:"style=form,explode=true,name=aliases"`
	Date                 *string `queryParam:"style=form,explode=true,name=date"`
	PlatformID           *string `queryParam:"style=form,explode=true,name=platformId"`
	RegionID             *string `queryParam:"style=form,explode=true,name=regionId"`
	ScheduleEnd          *string `queryParam:"style=form,explode=true,name=scheduleEnd"`
	ScheduleStart        *string `queryParam:"style=form,explode=true,name=scheduleStart"`
	ScheduleUpdatedSince *string `queryParam:"style=form,explode=true,name=scheduleUpdatedSince"`
}

type ListChannelsSecurity struct {
	Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}

type ListChannelsRequest struct {
	QueryParams ListChannelsQueryParams
	Security    ListChannelsSecurity
}

type ListChannelsResponse struct {
	ContentType                          string
	StatusCode                           int64
	ListChannels200ApplicationJSONObject map[string]interface{}
}
