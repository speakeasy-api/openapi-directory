package operations

import (
	"openapi/pkg/models/shared"
)

type DownloadGlobalGlossaryResponse struct {
	ContentType                                    string
	Error                                          *shared.Error
	StatusCode                                     int64
	DownloadGlobalGlossary200ApplicationJSONString *string
}
