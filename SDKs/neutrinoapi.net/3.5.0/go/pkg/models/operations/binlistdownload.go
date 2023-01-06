package operations

import (
	"openapi/pkg/models/shared"
)

type BinListDownloadRequestBody struct {
	Include8digit *bool `form:"name=include-8digit"`
	IncludeIso3   *bool `form:"name=include-iso3"`
}

type BinListDownloadRequest struct {
	Request *BinListDownloadRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type BinListDownloadResponse struct {
	APIError                                      *shared.APIError
	BINListDownload200ApplicationJSONBinaryString []byte
	ContentType                                   string
	StatusCode                                    int64
}
