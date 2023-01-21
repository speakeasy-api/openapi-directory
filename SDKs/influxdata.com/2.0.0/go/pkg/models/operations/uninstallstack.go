package operations

import (
	"openapi/pkg/models/shared"
)

type UninstallStackPathParams struct {
	StackID string `pathParam:"style=simple,explode=false,name=stack_id"`
}

type UninstallStackRequest struct {
	PathParams UninstallStackPathParams
}

type UninstallStackResponse struct {
	ContentType string
	Error       *interface{}
	Stack       *shared.Stack
	StatusCode  int64
}
