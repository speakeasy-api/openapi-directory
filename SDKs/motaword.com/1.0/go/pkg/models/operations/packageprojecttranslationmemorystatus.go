package operations

import (
	"openapi/pkg/models/shared"
)

type PackageProjectTranslationMemoryStatusPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=projectId"`
}

type PackageProjectTranslationMemoryStatusQueryParams struct {
	AsyncRequestKey string `queryParam:"style=form,explode=true,name=async_request_key"`
}

type PackageProjectTranslationMemoryStatusRequest struct {
	PathParams  PackageProjectTranslationMemoryStatusPathParams
	QueryParams PackageProjectTranslationMemoryStatusQueryParams
}

type PackageProjectTranslationMemoryStatusResponse struct {
	AsyncOperationStatus *shared.AsyncOperationStatus
	ContentType          string
	StatusCode           int64
}
