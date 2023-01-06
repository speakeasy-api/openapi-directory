package operations

import (
	"openapi/pkg/models/shared"
)

type DownloadLanguagePathParams struct {
	ID       int64  `pathParam:"style=simple,explode=false,name=id"`
	Language string `pathParam:"style=simple,explode=false,name=language"`
}

type DownloadLanguageRequest struct {
	PathParams DownloadLanguagePathParams
}

type DownloadLanguageResponse struct {
	ContentType                                           string
	Error                                                 *shared.Error
	StatusCode                                            int64
	DownloadLanguage200ApplicationOctetStreamBinaryString []byte
}
