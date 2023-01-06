package operations

import (
	"openapi/pkg/models/shared"
)

type GetWebhooks200ApplicationJSON struct {
	Count     *int64           `json:"count,omitempty"`
	Length    *int64           `json:"length,omitempty"`
	Page      *int64           `json:"page,omitempty"`
	PageTotal *int64           `json:"page_total,omitempty"`
	Results   []shared.Webhook `json:"results,omitempty"`
}

type GetWebhooks401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetWebhooks403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetWebhooksResponse struct {
	ContentType                         string
	StatusCode                          int64
	GetWebhooks200ApplicationJSONObject *GetWebhooks200ApplicationJSON
	GetWebhooks401ApplicationJSONObject *GetWebhooks401ApplicationJSON
	GetWebhooks403ApplicationJSONObject *GetWebhooks403ApplicationJSON
}
