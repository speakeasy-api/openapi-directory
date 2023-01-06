package operations

import (
	"openapi/pkg/models/shared"
)

type DownloadImagePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DownloadImageSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type DownloadImageRequest struct {
	PathParams DownloadImagePathParams
	Request    shared.RedownloadImage `request:"mediaType=application/json"`
	Security   DownloadImageSecurity
}

type DownloadImageResponse struct {
	ContentType string
	StatusCode  int64
	URL         *shared.URL
}
