package operations

import (
	"openapi/pkg/models/shared"
)

type DownloadProjectDocumentPathParams struct {
	DocumentID int64 `pathParam:"style=simple,explode=false,name=documentId"`
	ProjectID  int64 `pathParam:"style=simple,explode=false,name=projectId"`
}

type DownloadProjectDocumentRequest struct {
	PathParams DownloadProjectDocumentPathParams
}

type DownloadProjectDocumentResponse struct {
	ContentType                                     string
	Error                                           *shared.Error
	StatusCode                                      int64
	DownloadProjectDocument200ApplicationJSONString *string
}
