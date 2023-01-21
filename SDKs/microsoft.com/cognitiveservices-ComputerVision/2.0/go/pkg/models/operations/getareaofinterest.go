package operations

import (
	"openapi/pkg/models/shared"
)

type GetAreaOfInterestRequest struct {
	Request shared.ImageURL `request:"mediaType=application/json"`
}

type GetAreaOfInterestResponse struct {
	AreaOfInterestResult *shared.AreaOfInterestResult
	ComputerVisionError  *shared.ComputerVisionError
	ContentType          string
	StatusCode           int64
}
