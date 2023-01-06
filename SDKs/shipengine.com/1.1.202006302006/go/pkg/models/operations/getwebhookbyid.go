package operations

import (
	"openapi/pkg/models/shared"
)

type GetWebhookByIDPathParams struct {
	WebhookID string `pathParam:"style=simple,explode=false,name=webhook_id"`
}

type GetWebhookByIDRequest struct {
	PathParams GetWebhookByIDPathParams
}

type GetWebhookByIDResponse struct {
	ContentType                string
	StatusCode                 int64
	ErrorResponseBody          *shared.ErrorResponseBody
	GetWebhookByIDResponseBody *shared.GetWebhookByIDResponseBody
}
