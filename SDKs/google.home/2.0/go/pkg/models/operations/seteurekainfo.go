package operations

import (
	"openapi/pkg/models/shared"
)

type SetEurekaInfoRequest struct {
	Request shared.SetEurekaInfoRequest `request:"mediaType=application/json"`
}

type SetEurekaInfoResponse struct {
	ContentType                     string
	SetEurekaInfo200TextPlainObject *string
	StatusCode                      int64
}
