package operations

import (
	"openapi/pkg/models/shared"
)

type GetIterationsPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetIterationsRequest struct {
	PathParams GetIterationsPathParams
}

type GetIterationsResponse struct {
	Body              []byte
	ContentType       string
	CustomVisionError *shared.CustomVisionError
	Iterations        []shared.Iteration
	StatusCode        int64
}
