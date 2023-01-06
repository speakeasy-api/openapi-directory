package operations

import (
	"openapi/pkg/models/shared"
)

type GetStringStatsResponse struct {
	ClientStringStats *shared.ClientStringStats
	ContentType       string
	Error             *shared.Error
	StatusCode        int64
}
