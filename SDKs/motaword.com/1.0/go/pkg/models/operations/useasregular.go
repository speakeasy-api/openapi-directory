package operations

import (
	"openapi/pkg/models/shared"
)

type UseAsRegularPathParams struct {
	DocumentID int64 `pathParam:"style=simple,explode=false,name=documentId"`
}

type UseAsRegularRequest struct {
	PathParams UseAsRegularPathParams
	Request    *shared.UseAsRegularPayload `request:"mediaType=application/json"`
}

type UseAsRegularResponse struct {
	ContentType     string
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
