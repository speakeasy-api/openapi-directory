package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateContinuousProjectPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateContinuousProjectRequest struct {
	PathParams UpdateContinuousProjectPathParams
	Request    *shared.ContinuousProjectUpdateContent `request:"mediaType=application/json"`
}

type UpdateContinuousProjectResponse struct {
	ContentType       string
	ContinuousProject *shared.ContinuousProject
	Error             *shared.Error
	StatusCode        int64
}
