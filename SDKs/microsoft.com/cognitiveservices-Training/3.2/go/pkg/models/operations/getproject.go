package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetProjectRequest struct {
	PathParams GetProjectPathParams
}

type GetProjectResponse struct {
	Body              []byte
	ContentType       string
	CustomVisionError *shared.CustomVisionError
	Project           *shared.Project
	StatusCode        int64
}
