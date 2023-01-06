package operations

import (
	"openapi/pkg/models/shared"
)

type CheckDocumentsReindexQueryParams struct {
	AsyncRequestKey string `queryParam:"style=form,explode=true,name=async_request_key"`
}

type CheckDocumentsReindexRequest struct {
	QueryParams CheckDocumentsReindexQueryParams
}

type CheckDocumentsReindexResponse struct {
	AsyncOperationStatus *shared.AsyncOperationStatus
	ContentType          string
	StatusCode           int64
}
