package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectStatsResponse struct {
	ClientProjectStats *shared.ClientProjectStats
	ContentType        string
	Error              *shared.Error
	StatusCode         int64
}
