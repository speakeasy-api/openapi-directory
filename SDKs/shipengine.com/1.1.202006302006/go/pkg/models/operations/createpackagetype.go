package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePackageTypeRequest struct {
	Request shared.CreatePackageTypeRequestBody `request:"mediaType=application/json"`
}

type CreatePackageTypeResponse struct {
	ContentType                   string
	StatusCode                    int64
	CreatePackageTypeResponseBody *shared.CreatePackageTypeResponseBody
	ErrorResponseBody             *shared.ErrorResponseBody
}
