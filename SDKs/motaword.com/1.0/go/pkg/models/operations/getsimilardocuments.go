package operations

import (
	"openapi/pkg/models/shared"
)

type GetSimilarDocumentsPathParams struct {
	DocumentID int64 `pathParam:"style=simple,explode=false,name=documentId"`
}

type GetSimilarDocumentsWithEnum string

const (
	GetSimilarDocumentsWithEnumPreview GetSimilarDocumentsWithEnum = "preview"
	GetSimilarDocumentsWithEnumEditors GetSimilarDocumentsWithEnum = "editors"
)

type GetSimilarDocumentsQueryParams struct {
	PerPage *int64                        `queryParam:"style=form,explode=true,name=per_page"`
	With    []GetSimilarDocumentsWithEnum `queryParam:"style=form,explode=true,name=with[]"`
}

type GetSimilarDocumentsRequest struct {
	PathParams  GetSimilarDocumentsPathParams
	QueryParams GetSimilarDocumentsQueryParams
}

type GetSimilarDocumentsResponse struct {
	ContentType  string
	DocumentList *shared.DocumentList
	StatusCode   int64
}
