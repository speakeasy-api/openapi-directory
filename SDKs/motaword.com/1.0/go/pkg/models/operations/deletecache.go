package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCachePathParams struct {
	Key string `pathParam:"style=simple,explode=false,name=key"`
}

type DeleteCacheRequest struct {
	PathParams DeleteCachePathParams
}

type DeleteCacheResponse struct {
	ContentType     string
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
