package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectDocumentsPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetProjectDocumentsWithEnum string

const (
	GetProjectDocumentsWithEnumPreview GetProjectDocumentsWithEnum = "preview"
	GetProjectDocumentsWithEnumEditors GetProjectDocumentsWithEnum = "editors"
)

type GetProjectDocumentsQueryParams struct {
	With []GetProjectDocumentsWithEnum `queryParam:"style=form,explode=true,name=with[]"`
}

type GetProjectDocumentsRequest struct {
	PathParams  GetProjectDocumentsPathParams
	QueryParams GetProjectDocumentsQueryParams
}

type GetProjectDocumentsResponse struct {
	ContentType  string
	DocumentList *shared.DocumentList
	Error        *shared.Error
	StatusCode   int64
}
