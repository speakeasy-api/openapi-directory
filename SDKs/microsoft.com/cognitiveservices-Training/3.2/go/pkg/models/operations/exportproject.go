package operations

import (
	"openapi/pkg/models/shared"
)

type ExportProjectPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type ExportProjectRequest struct {
	PathParams ExportProjectPathParams
}

type ExportProjectResponse struct {
	Body              []byte
	ContentType       string
	CustomVisionError *shared.CustomVisionError
	ProjectExport     *shared.ProjectExport
	StatusCode        int64
}
