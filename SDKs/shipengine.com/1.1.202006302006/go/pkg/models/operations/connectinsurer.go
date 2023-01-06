package operations

import (
	"openapi/pkg/models/shared"
)

type ConnectInsurerRequest struct {
	Request shared.ConnectInsurerRequestBody `request:"mediaType=application/json"`
}

type ConnectInsurerResponse struct {
	ContentType                string
	StatusCode                 int64
	ConnectInsurerResponseBody map[string]interface{}
	ErrorResponseBody          *shared.ErrorResponseBody
}
