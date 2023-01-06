package operations

import (
	"openapi/pkg/models/shared"
)

type GetEvents200ApplicationJSON struct {
	Count     *int64         `json:"count,omitempty"`
	Length    *int64         `json:"length,omitempty"`
	Page      *int64         `json:"page,omitempty"`
	PageTotal *int64         `json:"page_total,omitempty"`
	Results   []shared.Event `json:"results,omitempty"`
}

type GetEvents401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetEvents403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetEventsResponse struct {
	ContentType                       string
	StatusCode                        int64
	GetEvents200ApplicationJSONObject *GetEvents200ApplicationJSON
	GetEvents401ApplicationJSONObject *GetEvents401ApplicationJSON
	GetEvents403ApplicationJSONObject *GetEvents403ApplicationJSON
}
