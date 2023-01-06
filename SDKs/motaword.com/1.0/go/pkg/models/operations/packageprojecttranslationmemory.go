package operations

import (
	"openapi/pkg/models/shared"
)

type PackageProjectTranslationMemoryPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=projectId"`
}

type PackageProjectTranslationMemoryQueryParams struct {
	Async  *int64  `queryParam:"style=form,explode=true,name=async"`
	Format *string `queryParam:"style=form,explode=true,name=format"`
}

type PackageProjectTranslationMemoryRequest struct {
	PathParams  PackageProjectTranslationMemoryPathParams
	QueryParams PackageProjectTranslationMemoryQueryParams
}

type PackageProjectTranslationMemoryResponse struct {
	AsyncOperationStatus                                         *shared.AsyncOperationStatus
	ContentType                                                  string
	StatusCode                                                   int64
	PackageProjectTranslationMemory200ApplicationXMLBinaryString []byte
}
