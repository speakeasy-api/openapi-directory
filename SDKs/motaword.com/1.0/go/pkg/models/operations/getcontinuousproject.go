package operations

import (
	"openapi/pkg/models/shared"
)

type GetContinuousProjectPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetContinuousProjectRequest struct {
	PathParams GetContinuousProjectPathParams
}

type GetContinuousProjectResponse struct {
	ContentType       string
	ContinuousProject *shared.ContinuousProject
	Error             *shared.Error
	StatusCode        int64
}
