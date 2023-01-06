package operations

import (
	"openapi/pkg/models/shared"
)

type BatchReadFileRequest struct {
	Request shared.ImageURL `request:"mediaType=application/json"`
}

type BatchReadFileResponse struct {
	ComputerVisionError *shared.ComputerVisionError
	ContentType         string
	Headers             map[string][]string
	StatusCode          int64
}
