package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectDocumentPathParams struct {
	DocumentID int64 `pathParam:"style=simple,explode=false,name=documentId"`
	ProjectID  int64 `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetProjectDocumentWithEnum string

const (
	GetProjectDocumentWithEnumPreview GetProjectDocumentWithEnum = "preview"
	GetProjectDocumentWithEnumEditors GetProjectDocumentWithEnum = "editors"
)

type GetProjectDocumentQueryParams struct {
	With []GetProjectDocumentWithEnum `queryParam:"style=form,explode=true,name=with[]"`
}

type GetProjectDocumentRequest struct {
	PathParams  GetProjectDocumentPathParams
	QueryParams GetProjectDocumentQueryParams
}

type GetProjectDocumentResponse struct {
	ContentType string
	Document    *shared.Document
	Error       *shared.Error
	StatusCode  int64
}
