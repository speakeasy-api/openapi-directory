package operations

import (
	"openapi/pkg/models/shared"
)

type RebootandFactoryResetRequest struct {
	Request shared.RebootandFactoryResetRequest `request:"mediaType=application/json"`
}

type RebootandFactoryResetResponse struct {
	ContentType                             string
	RebootandFactoryReset200TextPlainObject *string
	StatusCode                              int64
}
