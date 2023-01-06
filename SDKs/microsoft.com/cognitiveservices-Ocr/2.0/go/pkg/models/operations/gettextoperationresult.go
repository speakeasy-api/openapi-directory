package operations

import (
	"openapi/pkg/models/shared"
)

type GetTextOperationResultPathParams struct {
	OperationID string `pathParam:"style=simple,explode=false,name=operationId"`
}

type GetTextOperationResultRequest struct {
	PathParams GetTextOperationResultPathParams
}

type GetTextOperationResultResponse struct {
	ComputerVisionError *shared.ComputerVisionError
	ContentType         string
	StatusCode          int64
	TextOperationResult *shared.TextOperationResult
}
