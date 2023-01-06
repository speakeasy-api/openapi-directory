package operations

import (
	"openapi/pkg/models/shared"
)

type GetWebhooksIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetWebhooksID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetWebhooksID403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetWebhooksIDRequest struct {
	PathParams GetWebhooksIDPathParams
}

type GetWebhooksIDResponse struct {
	ContentType                           string
	StatusCode                            int64
	Webhook                               *shared.Webhook
	GetWebhooksID401ApplicationJSONObject *GetWebhooksID401ApplicationJSON
	GetWebhooksID403ApplicationJSONObject *GetWebhooksID403ApplicationJSON
}
