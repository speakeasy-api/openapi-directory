package operations

import (
	"openapi/pkg/models/shared"
)

type GetFrameworksQueryParams struct {
	Length   *int64  `queryParam:"style=form,explode=true,name=length"`
	Ordering *string `queryParam:"style=form,explode=true,name=ordering"`
	Page     *int64  `queryParam:"style=form,explode=true,name=page"`
	Search   *string `queryParam:"style=form,explode=true,name=search"`
}

type GetFrameworks200ApplicationJSON struct {
	Count     *int64             `json:"count,omitempty"`
	Length    *int64             `json:"length,omitempty"`
	Page      *int64             `json:"page,omitempty"`
	PageTotal *int64             `json:"page_total,omitempty"`
	Results   []shared.Framework `json:"results,omitempty"`
}

type GetFrameworks401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetFrameworksRequest struct {
	QueryParams GetFrameworksQueryParams
}

type GetFrameworksResponse struct {
	ContentType                           string
	StatusCode                            int64
	GetFrameworks200ApplicationJSONObject *GetFrameworks200ApplicationJSON
	GetFrameworks401ApplicationJSONObject *GetFrameworks401ApplicationJSON
}
