package operations

import (
	"openapi/pkg/models/shared"
)

type DownloadFilePathParams struct {
	Dir      string `pathParam:"style=simple,explode=false,name=dir"`
	Filename string `pathParam:"style=simple,explode=false,name=filename"`
	Subdir   string `pathParam:"style=simple,explode=false,name=subdir"`
}

type DownloadFileQueryParams struct {
	Download *string `queryParam:"style=form,explode=true,name=download"`
}

type DownloadFileRequest struct {
	PathParams  DownloadFilePathParams
	QueryParams DownloadFileQueryParams
}

type DownloadFileResponse struct {
	ContentType                 string
	StatusCode                  int64
	DownloadFilePdfResponseBody []byte
	DownloadFilePngResponseBody []byte
	DownloadFileZplResponseBody []byte
	ErrorResponseBody           *shared.ErrorResponseBody
}
