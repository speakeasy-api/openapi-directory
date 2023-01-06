package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteProjectDocumentPathParams struct {
	DocumentID int64 `pathParam:"style=simple,explode=false,name=documentId"`
	ProjectID  int64 `pathParam:"style=simple,explode=false,name=projectId"`
}

type DeleteProjectDocumentRequest struct {
	PathParams DeleteProjectDocumentPathParams
}

type DeleteProjectDocumentResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
