package operations

import (
	"openapi/pkg/models/shared"
)

type CreateProjectDocumentPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=projectId"`
}

type CreateProjectDocumentRequestBody struct {
	Documents   [][]byte                      `multipartForm:"name=documents[],json"`
	Schemes     *string                       `multipartForm:"name=schemes[]"`
	SourceLinks []shared.LinkedSourceDocument `multipartForm:"name=source-links[],json"`
}

type CreateProjectDocumentRequest struct {
	PathParams CreateProjectDocumentPathParams
	Request    *CreateProjectDocumentRequestBody `request:"mediaType=multipart/form-data"`
}

type CreateProjectDocumentResponse struct {
	ContentType  string
	DocumentList *shared.DocumentList
	Error        *shared.Error
	StatusCode   int64
}
