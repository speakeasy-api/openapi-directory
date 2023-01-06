package operations

import (
	"openapi/pkg/models/shared"
)

type GetIterationPathParams struct {
	IterationID string `pathParam:"style=simple,explode=false,name=iterationId"`
	ProjectID   string `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetIterationRequest struct {
	PathParams GetIterationPathParams
}

type GetIterationResponse struct {
	Body              []byte
	ContentType       string
	CustomVisionError *shared.CustomVisionError
	Iteration         *shared.Iteration
	StatusCode        int64
}
