package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetTargetsAllScansQueryParams struct {
	Length   *int64                 `queryParam:"style=form,explode=true,name=length"`
	Ordering *string                `queryParam:"style=form,explode=true,name=ordering"`
	Page     *int64                 `queryParam:"style=form,explode=true,name=page"`
	Search   *string                `queryParam:"style=form,explode=true,name=search"`
	Started  []time.Time            `queryParam:"style=form,explode=true,name=started"`
	Status   *shared.ScanStatusEnum `queryParam:"style=form,explode=true,name=status"`
}

type GetTargetsAllScans200ApplicationJSON struct {
	Count     *int64        `json:"count,omitempty"`
	Length    *int64        `json:"length,omitempty"`
	Page      *int64        `json:"page,omitempty"`
	PageTotal *int64        `json:"page_total,omitempty"`
	Results   []shared.Scan `json:"results,omitempty"`
}

type GetTargetsAllScans401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsAllScansRequest struct {
	QueryParams GetTargetsAllScansQueryParams
}

type GetTargetsAllScansResponse struct {
	ContentType                                string
	StatusCode                                 int64
	GetTargetsAllScans200ApplicationJSONObject *GetTargetsAllScans200ApplicationJSON
	GetTargetsAllScans401ApplicationJSONObject *GetTargetsAllScans401ApplicationJSON
}
