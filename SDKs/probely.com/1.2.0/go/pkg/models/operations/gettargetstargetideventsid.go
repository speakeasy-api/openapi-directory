package operations

import (
	"openapi/pkg/models/shared"
)

type GetTargetsTargetIDEventsIDPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDEventsID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDEventsID403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDEventsID404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDEventsIDRequest struct {
	PathParams GetTargetsTargetIDEventsIDPathParams
}

type GetTargetsTargetIDEventsIDResponse struct {
	ContentType                                        string
	Event                                              *shared.Event
	StatusCode                                         int64
	GetTargetsTargetIDEventsID401ApplicationJSONObject *GetTargetsTargetIDEventsID401ApplicationJSON
	GetTargetsTargetIDEventsID403ApplicationJSONObject *GetTargetsTargetIDEventsID403ApplicationJSON
	GetTargetsTargetIDEventsID404ApplicationJSONObject *GetTargetsTargetIDEventsID404ApplicationJSON
}
