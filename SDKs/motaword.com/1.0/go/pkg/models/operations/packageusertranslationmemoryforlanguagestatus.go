package operations

import (
	"openapi/pkg/models/shared"
)

type PackageUserTranslationMemoryForLanguageStatusPathParams struct {
	LanguageCode string `pathParam:"style=simple,explode=false,name=languageCode"`
}

type PackageUserTranslationMemoryForLanguageStatusQueryParams struct {
	AsyncRequestKey string `queryParam:"style=form,explode=true,name=async_request_key"`
}

type PackageUserTranslationMemoryForLanguageStatusRequest struct {
	PathParams  PackageUserTranslationMemoryForLanguageStatusPathParams
	QueryParams PackageUserTranslationMemoryForLanguageStatusQueryParams
}

type PackageUserTranslationMemoryForLanguageStatusResponse struct {
	AsyncOperationStatus *shared.AsyncOperationStatus
	ContentType          string
	StatusCode           int64
}
