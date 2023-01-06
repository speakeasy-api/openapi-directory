package operations

import (
	"openapi/pkg/models/shared"
)

type ListPackageTypesResponse struct {
	ContentType                  string
	StatusCode                   int64
	ErrorResponseBody            *shared.ErrorResponseBody
	ListPackageTypesResponseBody *shared.ListPackageTypesResponseBody
}
