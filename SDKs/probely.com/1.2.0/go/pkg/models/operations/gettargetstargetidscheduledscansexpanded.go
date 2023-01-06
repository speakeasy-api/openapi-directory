package operations

import (
	"openapi/pkg/models/shared"
)

type GetTargetsTargetIDScheduledscansExpandedPathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDScheduledscansExpandedQueryParams struct {
	Length *int64 `queryParam:"style=form,explode=true,name=length"`
}

type GetTargetsTargetIDScheduledscansExpanded200ApplicationJSON struct {
	Results []shared.Scheduled `json:"results,omitempty"`
}

type GetTargetsTargetIDScheduledscansExpanded404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDScheduledscansExpandedRequest struct {
	PathParams  GetTargetsTargetIDScheduledscansExpandedPathParams
	QueryParams GetTargetsTargetIDScheduledscansExpandedQueryParams
}

type GetTargetsTargetIDScheduledscansExpandedResponse struct {
	ContentType                                                      string
	StatusCode                                                       int64
	GetTargetsTargetIDScheduledscansExpanded200ApplicationJSONObject *GetTargetsTargetIDScheduledscansExpanded200ApplicationJSON
	GetTargetsTargetIDScheduledscansExpanded404ApplicationJSONObject *GetTargetsTargetIDScheduledscansExpanded404ApplicationJSON
}
