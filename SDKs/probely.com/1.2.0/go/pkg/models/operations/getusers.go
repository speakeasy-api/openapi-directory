package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersQueryParams struct {
	Length   *int64  `queryParam:"style=form,explode=true,name=length"`
	Ordering *string `queryParam:"style=form,explode=true,name=ordering"`
	Page     *int64  `queryParam:"style=form,explode=true,name=page"`
	Search   *string `queryParam:"style=form,explode=true,name=search"`
}

type GetUsers200ApplicationJSON struct {
	Count     *int64        `json:"count,omitempty"`
	Length    *int64        `json:"length,omitempty"`
	Page      *int64        `json:"page,omitempty"`
	PageTotal *int64        `json:"page_total,omitempty"`
	Results   []shared.User `json:"results,omitempty"`
}

type GetUsers401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetUsersRequest struct {
	QueryParams GetUsersQueryParams
}

type GetUsersResponse struct {
	ContentType                      string
	StatusCode                       int64
	GetUsers200ApplicationJSONObject *GetUsers200ApplicationJSON
	GetUsers401ApplicationJSONObject *GetUsers401ApplicationJSON
}
