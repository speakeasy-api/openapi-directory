package operations

import (
	"openapi/pkg/models/shared"
)

type DownloadVideosPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DownloadVideosSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type DownloadVideosRequest struct {
	PathParams DownloadVideosPathParams
	Request    shared.RedownloadVideo `request:"mediaType=application/json"`
	Security   DownloadVideosSecurity
}

type DownloadVideosResponse struct {
	ContentType string
	StatusCode  int64
	URL         *shared.URL
}
