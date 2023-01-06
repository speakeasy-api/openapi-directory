package operations

import (
	"openapi/pkg/models/shared"
)

type GetTargetsQueryParams struct {
	Length   *int64  `queryParam:"style=form,explode=true,name=length"`
	Ordering *string `queryParam:"style=form,explode=true,name=ordering"`
	Page     *int64  `queryParam:"style=form,explode=true,name=page"`
	Search   *string `queryParam:"style=form,explode=true,name=search"`
}

type GetTargets200ApplicationJSON struct {
	Length          *int64          `json:"length,omitempty"`
	Page            *int64          `json:"page,omitempty"`
	PageTotal       *int64          `json:"page_total,omitempty"`
	PaginationCount *int64          `json:"pagination_count,omitempty"`
	Results         []shared.Target `json:"results,omitempty"`
}

type GetTargets401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargets404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargets500ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsRequest struct {
	QueryParams GetTargetsQueryParams
}

type GetTargetsResponse struct {
	ContentType                        string
	StatusCode                         int64
	GetTargets200ApplicationJSONObject *GetTargets200ApplicationJSON
	GetTargets401ApplicationJSONObject *GetTargets401ApplicationJSON
	GetTargets404ApplicationJSONObject *GetTargets404ApplicationJSON
	GetTargets500ApplicationJSONObject *GetTargets500ApplicationJSON
}
