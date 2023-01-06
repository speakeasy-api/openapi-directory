package operations

import (
	"openapi/pkg/models/shared"
)

type ScanfordevicesRequest struct {
	Request shared.ScanfordevicesRequest `request:"mediaType=application/json"`
}

type ScanfordevicesResponse struct {
	ContentType                      string
	Scanfordevices200TextPlainObject *string
	StatusCode                       int64
}
