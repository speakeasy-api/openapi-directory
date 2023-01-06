package operations

import (
	"openapi/pkg/models/shared"
)

type GetKeysQueryParams struct {
	Length   *int64  `queryParam:"style=form,explode=true,name=length"`
	Ordering *string `queryParam:"style=form,explode=true,name=ordering"`
	Page     *int64  `queryParam:"style=form,explode=true,name=page"`
	Search   *string `queryParam:"style=form,explode=true,name=search"`
}

type GetKeys200ApplicationJSON struct {
	Count     *int64       `json:"count,omitempty"`
	Length    *int64       `json:"length,omitempty"`
	Page      *int64       `json:"page,omitempty"`
	PageTotal *int64       `json:"page_total,omitempty"`
	Results   []shared.Key `json:"results,omitempty"`
}

type GetKeys401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetKeys403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetKeysRequest struct {
	QueryParams GetKeysQueryParams
}

type GetKeysResponse struct {
	ContentType                     string
	StatusCode                      int64
	GetKeys200ApplicationJSONObject *GetKeys200ApplicationJSON
	GetKeys401ApplicationJSONObject *GetKeys401ApplicationJSON
	GetKeys403ApplicationJSONObject *GetKeys403ApplicationJSON
}
