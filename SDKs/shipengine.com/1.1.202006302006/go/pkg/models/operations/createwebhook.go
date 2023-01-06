package operations

import (
	"openapi/pkg/models/shared"
)

type CreateWebhookRequest struct {
	Request shared.CreateWebhookRequestBody `request:"mediaType=application/json"`
}

type CreateWebhookResponse struct {
	ContentType               string
	StatusCode                int64
	CreateWebhookResponseBody *shared.CreateWebhookResponseBody
	ErrorResponseBody         *shared.ErrorResponseBody
}
