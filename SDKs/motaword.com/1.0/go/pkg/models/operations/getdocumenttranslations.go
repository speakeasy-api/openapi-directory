package operations

import (
	"openapi/pkg/models/shared"
)

type GetDocumentTranslationsPathParams struct {
	DocumentID int64 `pathParam:"style=simple,explode=false,name=documentId"`
	ProjectID  int64 `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetDocumentTranslationsRequest struct {
	PathParams GetDocumentTranslationsPathParams
}

type GetDocumentTranslationsResponse struct {
	ContentType string
	StatusCode  int64
	StringList  *shared.StringList
}
