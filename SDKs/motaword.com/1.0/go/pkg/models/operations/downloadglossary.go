package operations

import (
	"openapi/pkg/models/shared"
)

type DownloadGlossaryPathParams struct {
	GlossaryID int64 `pathParam:"style=simple,explode=false,name=glossaryId"`
	ProjectID  int64 `pathParam:"style=simple,explode=false,name=projectId"`
}

type DownloadGlossaryRequest struct {
	PathParams DownloadGlossaryPathParams
}

type DownloadGlossaryResponse struct {
	ContentType                              string
	Error                                    *shared.Error
	StatusCode                               int64
	DownloadGlossary200ApplicationJSONString *string
}
