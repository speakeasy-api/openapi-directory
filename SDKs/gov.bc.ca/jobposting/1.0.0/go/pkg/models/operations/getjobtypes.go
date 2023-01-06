package operations

import (
	"openapi/pkg/models/shared"
)

type GetJobTypesResponse struct {
	ContentType string
	Error       *shared.Error
	JobTypes    []shared.JobType
	StatusCode  int64
}
