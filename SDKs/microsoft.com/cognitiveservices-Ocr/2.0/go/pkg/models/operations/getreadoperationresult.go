package operations

import (
	"openapi/pkg/models/shared"
)

type GetReadOperationResultPathParams struct {
	OperationID string `pathParam:"style=simple,explode=false,name=operationId"`
}

type GetReadOperationResultRequest struct {
	PathParams GetReadOperationResultPathParams
}

type GetReadOperationResultResponse struct {
	ComputerVisionError *shared.ComputerVisionError
	ContentType         string
	ReadOperationResult *shared.ReadOperationResult
	StatusCode          int64
}
