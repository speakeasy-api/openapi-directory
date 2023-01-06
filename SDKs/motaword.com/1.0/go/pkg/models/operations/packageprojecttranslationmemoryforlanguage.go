package operations

import (
	"openapi/pkg/models/shared"
)

type PackageProjectTranslationMemoryForLanguagePathParams struct {
	LanguageCode string `pathParam:"style=simple,explode=false,name=languageCode"`
	ProjectID    int64  `pathParam:"style=simple,explode=false,name=projectId"`
}

type PackageProjectTranslationMemoryForLanguageQueryParams struct {
	Async  *int64  `queryParam:"style=form,explode=true,name=async"`
	Format *string `queryParam:"style=form,explode=true,name=format"`
}

type PackageProjectTranslationMemoryForLanguageRequest struct {
	PathParams  PackageProjectTranslationMemoryForLanguagePathParams
	QueryParams PackageProjectTranslationMemoryForLanguageQueryParams
}

type PackageProjectTranslationMemoryForLanguageResponse struct {
	AsyncOperationStatus                                                    *shared.AsyncOperationStatus
	ContentType                                                             string
	StatusCode                                                              int64
	PackageProjectTranslationMemoryForLanguage200ApplicationXMLBinaryString []byte
}
