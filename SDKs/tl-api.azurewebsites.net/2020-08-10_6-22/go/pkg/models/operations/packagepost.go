package operations

import (
	"openapi/pkg/models/shared"
)

type PackagePostRequest struct {
	Request shared.PackageDto `request:"mediaType=application/json"`
}

type PackagePostResponse struct {
	APIException                  *shared.APIException
	ContentType                   string
	DefaultResponseDTOOfStatusDTO *shared.DefaultResponseDtoOfStatusDto
	StatusCode                    int64
}
