package operations

import (
	"openapi/pkg/models/shared"
)

type DownloadStyleGuidePathParams struct {
	ProjectID    int64 `pathParam:"style=simple,explode=false,name=projectId"`
	StyleGuideID int64 `pathParam:"style=simple,explode=false,name=styleGuideId"`
}

type DownloadStyleGuideRequest struct {
	PathParams DownloadStyleGuidePathParams
}

type DownloadStyleGuideResponse struct {
	ContentType                                string
	Error                                      *shared.Error
	StatusCode                                 int64
	DownloadStyleGuide200ApplicationJSONString *string
}
