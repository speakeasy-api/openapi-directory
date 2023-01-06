package operations

import (
	"openapi/pkg/models/shared"
)

type GetTargetsTargetIDEventsPathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDEvents200ApplicationJSON struct {
	Count     *int64         `json:"count,omitempty"`
	Length    *int64         `json:"length,omitempty"`
	Page      *int64         `json:"page,omitempty"`
	PageTotal *int64         `json:"page_total,omitempty"`
	Results   []shared.Event `json:"results,omitempty"`
}

type GetTargetsTargetIDEvents401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDEvents403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDEvents404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDEventsRequest struct {
	PathParams GetTargetsTargetIDEventsPathParams
}

type GetTargetsTargetIDEventsResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	GetTargetsTargetIDEvents200ApplicationJSONObject *GetTargetsTargetIDEvents200ApplicationJSON
	GetTargetsTargetIDEvents401ApplicationJSONObject *GetTargetsTargetIDEvents401ApplicationJSON
	GetTargetsTargetIDEvents403ApplicationJSONObject *GetTargetsTargetIDEvents403ApplicationJSON
	GetTargetsTargetIDEvents404ApplicationJSONObject *GetTargetsTargetIDEvents404ApplicationJSON
}
