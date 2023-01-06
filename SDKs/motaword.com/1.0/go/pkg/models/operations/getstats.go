package operations

import (
	"openapi/pkg/models/shared"
)

type GetStatsResponse struct {
	ContentType string
	Error       *shared.Error
	Stats       *shared.Stats
	StatusCode  int64
}
