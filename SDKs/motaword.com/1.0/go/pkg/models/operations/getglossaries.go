package operations

import (
	"openapi/pkg/models/shared"
)

type GetGlossariesPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetGlossariesRequest struct {
	PathParams GetGlossariesPathParams
}

type GetGlossariesResponse struct {
	ContentType  string
	Error        *shared.Error
	GlossaryList *shared.GlossaryList
	StatusCode   int64
}
