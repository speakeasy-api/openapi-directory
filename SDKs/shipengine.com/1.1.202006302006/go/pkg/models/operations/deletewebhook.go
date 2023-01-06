package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteWebhookPathParams struct {
	WebhookID string `pathParam:"style=simple,explode=false,name=webhook_id"`
}

type DeleteWebhookRequest struct {
	PathParams DeleteWebhookPathParams
}

type DeleteWebhookResponse struct {
	ContentType       string
	StatusCode        int64
	EmptyResponseBody *string
	ErrorResponseBody *shared.ErrorResponseBody
}
