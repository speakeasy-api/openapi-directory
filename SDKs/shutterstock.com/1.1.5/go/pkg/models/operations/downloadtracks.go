package operations

import (
	"openapi/pkg/models/shared"
)

type DownloadTracksPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DownloadTracksSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type DownloadTracksRequest struct {
	PathParams DownloadTracksPathParams
	Security   DownloadTracksSecurity
}

type DownloadTracksResponse struct {
	ContentType string
	StatusCode  int64
	URL         *shared.URL
}
