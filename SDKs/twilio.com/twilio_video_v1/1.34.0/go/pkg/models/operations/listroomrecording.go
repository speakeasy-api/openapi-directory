package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListRoomRecordingServers = []string{
	"https://video.twilio.com",
}

type ListRoomRecordingPathParams struct {
	RoomSid string `pathParam:"style=simple,explode=false,name=RoomSid"`
}

type ListRoomRecordingQueryParams struct {
	DateCreatedAfter  *time.Time                          `queryParam:"style=form,explode=true,name=DateCreatedAfter"`
	DateCreatedBefore *time.Time                          `queryParam:"style=form,explode=true,name=DateCreatedBefore"`
	PageSize          *int64                              `queryParam:"style=form,explode=true,name=PageSize"`
	SourceSid         *string                             `queryParam:"style=form,explode=true,name=SourceSid"`
	Status            *shared.RoomRecordingEnumStatusEnum `queryParam:"style=form,explode=true,name=Status"`
}

type ListRoomRecordingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListRoomRecordingRequest struct {
	ServerURL   *string
	PathParams  ListRoomRecordingPathParams
	QueryParams ListRoomRecordingQueryParams
	Security    ListRoomRecordingSecurity
}

type ListRoomRecording200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListRoomRecording200ApplicationJSONListRoomRecordingResponse struct {
	Meta       *ListRoomRecording200ApplicationJSONMeta `json:"meta"`
	Recordings []shared.VideoV1RoomRoomRecording        `json:"recordings"`
}

type ListRoomRecordingResponse struct {
	ContentType               string
	ListRoomRecordingResponse *ListRoomRecording200ApplicationJSONListRoomRecordingResponse
	StatusCode                int64
}
