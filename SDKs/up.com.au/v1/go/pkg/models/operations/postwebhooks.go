package operations

import (
	"openapi/pkg/models/shared"
)

type PostWebhooksRequest struct {
	Request *shared.CreateWebhookRequest `request:"mediaType=application/json"`
}

type PostWebhooksResponse struct {
	ContentType           string
	CreateWebhookResponse *shared.CreateWebhookResponse
	StatusCode            int64
}
