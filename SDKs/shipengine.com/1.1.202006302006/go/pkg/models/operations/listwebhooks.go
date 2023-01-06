package operations

import (
	"openapi/pkg/models/shared"
)

type ListWebhooksResponse struct {
	ContentType              string
	StatusCode               int64
	ErrorResponseBody        *shared.ErrorResponseBody
	ListWebhooksResponseBody []shared.Webhook
}
