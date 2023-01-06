package operations

import (
	"openapi/pkg/models/shared"
)

type GetRegionsResponse struct {
	ContentType string
	Error       *shared.Error
	Regions     []shared.Region
	StatusCode  int64
}
