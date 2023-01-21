package callbacks

import (
	"openapi/pkg/models/shared"
)

type EventRequest struct {
	Request shared.Event `request:"mediaType=application/json"`
}

type EventResponse struct {
	ContentType string
	StatusCode  int64
}
