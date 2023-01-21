package callbacks

import (
	"openapi/pkg/models/shared"
)

type MessageStatusRequest struct {
	Request shared.MessageStatus `request:"mediaType=application/json"`
}

type MessageStatusResponse struct {
	ContentType string
	StatusCode  int64
}
