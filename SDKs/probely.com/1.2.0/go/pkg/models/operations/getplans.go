package operations

import (
	"openapi/pkg/models/shared"
)

type GetPlansResponse struct {
	ContentType string
	Plans       []shared.Plan
	StatusCode  int64
}
