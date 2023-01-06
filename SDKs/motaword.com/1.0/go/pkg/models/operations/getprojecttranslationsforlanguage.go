package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectTranslationsForLanguagePathParams struct {
	Language  string `pathParam:"style=simple,explode=false,name=language"`
	ProjectID int64  `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetProjectTranslationsForLanguageRequest struct {
	PathParams GetProjectTranslationsForLanguagePathParams
}

type GetProjectTranslationsForLanguageResponse struct {
	ContentType string
	StatusCode  int64
	StringList  *shared.StringList
}
