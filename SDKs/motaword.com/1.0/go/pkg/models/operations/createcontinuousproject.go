package operations

import (
	"openapi/pkg/models/shared"
)

type CreateContinuousProjectRequest struct {
	Request *shared.ContinuousProject `request:"mediaType=application/json"`
}

type CreateContinuousProjectResponse struct {
	ContentType       string
	ContinuousProject *shared.ContinuousProject
	StatusCode        int64
}
