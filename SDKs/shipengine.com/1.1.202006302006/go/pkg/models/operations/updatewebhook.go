package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateWebhookPathParams struct {
	WebhookID string `pathParam:"style=simple,explode=false,name=webhook_id"`
}

type UpdateWebhookRequest struct {
	PathParams UpdateWebhookPathParams
	Request    shared.UpdateWebhookRequestBody `request:"mediaType=application/json"`
}

type UpdateWebhookResponse struct {
	ContentType       string
	StatusCode        int64
	EmptyResponseBody *string
	ErrorResponseBody *shared.ErrorResponseBody
}
