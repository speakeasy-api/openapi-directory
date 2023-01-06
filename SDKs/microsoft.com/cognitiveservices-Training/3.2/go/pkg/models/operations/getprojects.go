package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectsResponse struct {
	Body              []byte
	ContentType       string
	CustomVisionError *shared.CustomVisionError
	Projects          []shared.Project
	StatusCode        int64
}
