package operations

import (
	"openapi/pkg/models/shared"
)

type DownloadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DownloadRequest struct {
	PathParams DownloadPathParams
}

type DownloadResponse struct {
	ContentType                                   string
	Error                                         *shared.Error
	StatusCode                                    int64
	Download200ApplicationOctetStreamBinaryString []byte
}
