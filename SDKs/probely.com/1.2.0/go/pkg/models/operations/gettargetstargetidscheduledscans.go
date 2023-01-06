package operations

import (
	"openapi/pkg/models/shared"
)

type GetTargetsTargetIDScheduledscansPathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDScheduledscansQueryParams struct {
	Length   *int64  `queryParam:"style=form,explode=true,name=length"`
	Ordering *string `queryParam:"style=form,explode=true,name=ordering"`
	Page     *int64  `queryParam:"style=form,explode=true,name=page"`
	Search   *string `queryParam:"style=form,explode=true,name=search"`
}

type GetTargetsTargetIDScheduledscans200ApplicationJSON struct {
	Count     *int64             `json:"count,omitempty"`
	Length    *int64             `json:"length,omitempty"`
	Page      *int64             `json:"page,omitempty"`
	PageTotal *int64             `json:"page_total,omitempty"`
	Results   []shared.Scheduled `json:"results,omitempty"`
}

type GetTargetsTargetIDScheduledscans401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDScheduledscans404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDScheduledscansRequest struct {
	PathParams  GetTargetsTargetIDScheduledscansPathParams
	QueryParams GetTargetsTargetIDScheduledscansQueryParams
}

type GetTargetsTargetIDScheduledscansResponse struct {
	ContentType                                              string
	StatusCode                                               int64
	GetTargetsTargetIDScheduledscans200ApplicationJSONObject *GetTargetsTargetIDScheduledscans200ApplicationJSON
	GetTargetsTargetIDScheduledscans401ApplicationJSONObject *GetTargetsTargetIDScheduledscans401ApplicationJSON
	GetTargetsTargetIDScheduledscans404ApplicationJSONObject *GetTargetsTargetIDScheduledscans404ApplicationJSON
}
