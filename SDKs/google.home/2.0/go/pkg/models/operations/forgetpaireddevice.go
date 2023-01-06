package operations

import (
	"openapi/pkg/models/shared"
)

type ForgetpaireddeviceRequest struct {
	Request shared.ForgetpaireddeviceRequest `request:"mediaType=application/json"`
}

type ForgetpaireddeviceResponse struct {
	ContentType                          string
	Forgetpaireddevice200TextPlainObject *string
	StatusCode                           int64
}
