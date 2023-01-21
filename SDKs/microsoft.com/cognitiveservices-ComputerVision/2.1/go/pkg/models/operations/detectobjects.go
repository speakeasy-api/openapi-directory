package operations

import (
	"openapi/pkg/models/shared"
)

type DetectObjectsRequest struct {
	Request shared.ImageURL `request:"mediaType=application/json"`
}

type DetectObjectsResponse struct {
	ComputerVisionError *shared.ComputerVisionError
	ContentType         string
	DetectResult        *shared.DetectResult
	StatusCode          int64
}
