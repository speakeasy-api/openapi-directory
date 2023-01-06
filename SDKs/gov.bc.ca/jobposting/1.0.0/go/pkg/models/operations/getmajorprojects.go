package operations

import (
	"openapi/pkg/models/shared"
)

type GetMajorProjectsResponse struct {
	ContentType   string
	Error         *shared.Error
	MajorProjects []shared.MajorProject
	StatusCode    int64
}
