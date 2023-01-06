package operations

import (
	"openapi/pkg/models/shared"
)

type CreateManifestRequest struct {
	Request interface{} `request:"mediaType=application/json"`
}

type CreateManifestResponse struct {
	ContentType                string
	StatusCode                 int64
	CreateManifestResponseBody *shared.CreateManifestResponseBody
	ErrorResponseBody          *shared.ErrorResponseBody
}
