package operations

import (
	"openapi/pkg/models/shared"
)

type GetIndustriesResponse struct {
	ContentType string
	Error       *shared.Error
	Industries  []shared.Industry
	StatusCode  int64
}
