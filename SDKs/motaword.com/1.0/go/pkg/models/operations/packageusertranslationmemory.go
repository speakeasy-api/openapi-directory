package operations

import (
	"openapi/pkg/models/shared"
)

type PackageUserTranslationMemoryPathParams struct {
	LanguageCode string `pathParam:"style=simple,explode=false,name=languageCode"`
}

type PackageUserTranslationMemoryQueryParams struct {
	Async *int64 `queryParam:"style=form,explode=true,name=async"`
	Email *int64 `queryParam:"style=form,explode=true,name=email"`
}

type PackageUserTranslationMemoryRequest struct {
	PathParams  PackageUserTranslationMemoryPathParams
	QueryParams PackageUserTranslationMemoryQueryParams
}

type PackageUserTranslationMemoryResponse struct {
	AsyncOperationStatus                                      *shared.AsyncOperationStatus
	ContentType                                               string
	StatusCode                                                int64
	PackageUserTranslationMemory200ApplicationXMLBinaryString []byte
}
