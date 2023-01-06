package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetTargetsTargetIDScansPathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDScansQueryParams struct {
	Length   *int64                 `queryParam:"style=form,explode=true,name=length"`
	Ordering *string                `queryParam:"style=form,explode=true,name=ordering"`
	Page     *int64                 `queryParam:"style=form,explode=true,name=page"`
	Search   *string                `queryParam:"style=form,explode=true,name=search"`
	Started  []time.Time            `queryParam:"style=form,explode=true,name=started"`
	Status   *shared.ScanStatusEnum `queryParam:"style=form,explode=true,name=status"`
}

type GetTargetsTargetIDScans200ApplicationJSON struct {
	Count     *int64        `json:"count,omitempty"`
	Length    *int64        `json:"length,omitempty"`
	Page      *int64        `json:"page,omitempty"`
	PageTotal *int64        `json:"page_total,omitempty"`
	Results   []shared.Scan `json:"results,omitempty"`
}

type GetTargetsTargetIDScans401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDScans404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDScansRequest struct {
	PathParams  GetTargetsTargetIDScansPathParams
	QueryParams GetTargetsTargetIDScansQueryParams
}

type GetTargetsTargetIDScansResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	GetTargetsTargetIDScans200ApplicationJSONObject *GetTargetsTargetIDScans200ApplicationJSON
	GetTargetsTargetIDScans401ApplicationJSONObject *GetTargetsTargetIDScans401ApplicationJSON
	GetTargetsTargetIDScans404ApplicationJSONObject *GetTargetsTargetIDScans404ApplicationJSON
}
