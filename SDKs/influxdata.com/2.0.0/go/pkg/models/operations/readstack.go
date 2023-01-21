package operations

import (
	"openapi/pkg/models/shared"
)

type ReadStackPathParams struct {
	StackID string `pathParam:"style=simple,explode=false,name=stack_id"`
}

type ReadStackRequest struct {
	PathParams ReadStackPathParams
}

type ReadStackResponse struct {
	ContentType string
	Error       *interface{}
	Stack       *shared.Stack
	StatusCode  int64
}
