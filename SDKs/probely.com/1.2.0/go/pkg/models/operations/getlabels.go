package operations

import (
	"openapi/pkg/models/shared"
)

type GetLabelsQueryParams struct {
	Length   *int64  `queryParam:"style=form,explode=true,name=length"`
	Ordering *string `queryParam:"style=form,explode=true,name=ordering"`
	Page     *int64  `queryParam:"style=form,explode=true,name=page"`
	Search   *string `queryParam:"style=form,explode=true,name=search"`
}

type GetLabels200ApplicationJSON struct {
	Count     *int64         `json:"count,omitempty"`
	Length    *int64         `json:"length,omitempty"`
	Page      *int64         `json:"page,omitempty"`
	PageTotal *int64         `json:"page_total,omitempty"`
	Results   []shared.Label `json:"results,omitempty"`
}

type GetLabels401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetLabelsRequest struct {
	QueryParams GetLabelsQueryParams
}

type GetLabelsResponse struct {
	ContentType                       string
	StatusCode                        int64
	GetLabels200ApplicationJSONObject *GetLabels200ApplicationJSON
	GetLabels401ApplicationJSONObject *GetLabels401ApplicationJSON
}
