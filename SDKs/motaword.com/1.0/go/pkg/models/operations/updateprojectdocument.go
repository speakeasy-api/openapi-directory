package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateProjectDocumentPathParams struct {
	DocumentID int64 `pathParam:"style=simple,explode=false,name=documentId"`
	ProjectID  int64 `pathParam:"style=simple,explode=false,name=projectId"`
}

type UpdateProjectDocumentRequestBodyDocuments struct {
	Content   []byte `multipartForm:"content"`
	Documents string `multipartForm:"name=documents"`
}

type UpdateProjectDocumentRequestBody struct {
	Documents  *UpdateProjectDocumentRequestBodyDocuments `multipartForm:"file"`
	Schemes    *string                                    `multipartForm:"name=schemes"`
	SourceLink *shared.LinkedSourceDocument               `multipartForm:"name=source-link,json"`
}

type UpdateProjectDocumentRequest struct {
	PathParams UpdateProjectDocumentPathParams
	Request    *UpdateProjectDocumentRequestBody `request:"mediaType=multipart/form-data"`
}

type UpdateProjectDocumentResponse struct {
	ContentType string
	Document    *shared.Document
	Error       *shared.Error
	StatusCode  int64
}
