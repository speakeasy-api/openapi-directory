package callbacks

import (
	"openapi/pkg/models/shared"
)

type EventPathParams struct {
	WebhookURL string `pathParam:"style=simple,explode=false,name=webhookURL"`
}

type EventHeaders struct {
	XUpAuthenticitySignature *string `header:"style=simple,explode=false,name=X-Up-Authenticity-Signature"`
}

type EventRequest struct {
	PathParams EventPathParams
	Headers    EventHeaders
	Request    *shared.WebhookEventCallback `request:"mediaType=application/json"`
}

type EventResponse struct {
	ContentType string
	StatusCode  int64
}
