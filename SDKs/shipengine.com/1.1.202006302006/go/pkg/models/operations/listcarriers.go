package operations

import (
	"openapi/pkg/models/shared"
)

type ListCarriersResponse struct {
	ContentType             string
	StatusCode              int64
	ErrorResponseBody       *shared.ErrorResponseBody
	GetCarriersResponseBody *shared.GetCarriersResponseBody
}
