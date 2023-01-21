package operations

import (
	"openapi/pkg/models/shared"
)

type ListModelsResponse struct {
	ComputerVisionError *shared.ComputerVisionError
	ContentType         string
	ListModelsResult    *shared.ListModelsResult
	StatusCode          int64
}
