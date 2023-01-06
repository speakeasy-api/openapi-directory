package operations

import (
	"openapi/pkg/models/shared"
)

type GetInfoInfoGetResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	InfoResponse  *shared.InfoResponse
	StatusCode    int64
}
