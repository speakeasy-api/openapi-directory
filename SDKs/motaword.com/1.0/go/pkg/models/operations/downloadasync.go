package operations

import (
	"openapi/pkg/models/shared"
)

type DownloadAsyncQueryParams struct {
	AsyncRequestKey string `queryParam:"style=form,explode=true,name=async_request_key"`
}

type DownloadAsyncRequest struct {
	QueryParams DownloadAsyncQueryParams
}

type DownloadAsyncResponse struct {
	ContentType                                        string
	Error                                              *shared.Error
	StatusCode                                         int64
	DownloadAsync200ApplicationOctetStreamBinaryString []byte
}
