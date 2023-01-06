package operations

import (
	"openapi/pkg/models/shared"
)

type PostTargetActionsRequest struct {
	Request []string `request:"mediaType=application/json"`
}

type PostTargetActionsResponse struct {
	Actions     []shared.Actions
	ContentType string
	StatusCode  int64
}
