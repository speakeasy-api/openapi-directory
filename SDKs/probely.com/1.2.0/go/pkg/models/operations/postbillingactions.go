package operations

import (
	"openapi/pkg/models/shared"
)

type PostBillingActionsRequest struct {
	Request []string `request:"mediaType=application/json"`
}

type PostBillingActionsResponse struct {
	Action      *shared.Action
	ContentType string
	StatusCode  int64
}
