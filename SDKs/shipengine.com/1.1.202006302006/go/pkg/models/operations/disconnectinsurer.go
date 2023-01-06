package operations

import (
	"openapi/pkg/models/shared"
)

type DisconnectInsurerResponse struct {
	ContentType                   string
	StatusCode                    int64
	DisconnectInsurerResponseBody map[string]interface{}
	ErrorResponseBody             *shared.ErrorResponseBody
}
