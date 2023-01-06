package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetEventsID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetEventsID403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetEventsID404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetEventsIDRequest struct {
	PathParams GetEventsIDPathParams
}

type GetEventsIDResponse struct {
	ContentType                         string
	Event                               *shared.Event
	StatusCode                          int64
	GetEventsID401ApplicationJSONObject *GetEventsID401ApplicationJSON
	GetEventsID403ApplicationJSONObject *GetEventsID403ApplicationJSON
	GetEventsID404ApplicationJSONObject *GetEventsID404ApplicationJSON
}
