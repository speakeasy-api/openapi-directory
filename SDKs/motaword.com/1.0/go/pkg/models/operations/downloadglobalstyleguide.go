package operations

import (
	"openapi/pkg/models/shared"
)

type DownloadGlobalStyleGuideResponse struct {
	ContentType                                      string
	Error                                            *shared.Error
	StatusCode                                       int64
	DownloadGlobalStyleGuide200ApplicationJSONString *string
}
