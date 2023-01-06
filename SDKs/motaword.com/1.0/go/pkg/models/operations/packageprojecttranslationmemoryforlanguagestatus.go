package operations

import (
	"openapi/pkg/models/shared"
)

type PackageProjectTranslationMemoryForLanguageStatusPathParams struct {
	LanguageCode string `pathParam:"style=simple,explode=false,name=languageCode"`
	ProjectID    int64  `pathParam:"style=simple,explode=false,name=projectId"`
}

type PackageProjectTranslationMemoryForLanguageStatusQueryParams struct {
	AsyncRequestKey string `queryParam:"style=form,explode=true,name=async_request_key"`
}

type PackageProjectTranslationMemoryForLanguageStatusRequest struct {
	PathParams  PackageProjectTranslationMemoryForLanguageStatusPathParams
	QueryParams PackageProjectTranslationMemoryForLanguageStatusQueryParams
}

type PackageProjectTranslationMemoryForLanguageStatusResponse struct {
	AsyncOperationStatus *shared.AsyncOperationStatus
	ContentType          string
	StatusCode           int64
}
