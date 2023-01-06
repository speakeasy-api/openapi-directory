package operations

import (
	"openapi/pkg/models/shared"
)

type GetContinuousProjectsResponse struct {
	ContentType            string
	ContinuousProjectsList *shared.ContinuousProjectsList
	StatusCode             int64
}
