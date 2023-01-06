package operations

import (
	"openapi/pkg/models/shared"
)

type GetDocumentTranslationsForLanguagePathParams struct {
	DocumentID int64  `pathParam:"style=simple,explode=false,name=documentId"`
	Language   string `pathParam:"style=simple,explode=false,name=language"`
	ProjectID  int64  `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetDocumentTranslationsForLanguageRequest struct {
	PathParams GetDocumentTranslationsForLanguagePathParams
}

type GetDocumentTranslationsForLanguageResponse struct {
	ContentType string
	StatusCode  int64
	StringList  *shared.StringList
}
