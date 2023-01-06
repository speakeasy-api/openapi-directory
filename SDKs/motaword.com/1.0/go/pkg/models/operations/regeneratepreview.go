package operations

import (
	"openapi/pkg/models/shared"
)

type RegeneratePreviewPathParams struct {
	DocumentID int64 `pathParam:"style=simple,explode=false,name=documentId"`
}

type RegeneratePreviewRequest struct {
	PathParams RegeneratePreviewPathParams
}

type RegeneratePreviewResponse struct {
	ContentType               string
	RegeneratePreviewResponse *shared.RegeneratePreviewResponse
	StatusCode                int64
}
