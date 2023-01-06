package operations

import (
	"openapi/pkg/models/shared"
)

type UseAsDraftPathParams struct {
	DocumentID int64 `pathParam:"style=simple,explode=false,name=documentId"`
}

type UseAsDraftRequest struct {
	PathParams UseAsDraftPathParams
	Request    *shared.UseAsDraftPayload `request:"mediaType=application/json"`
}

type UseAsDraftResponse struct {
	ContentType     string
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
