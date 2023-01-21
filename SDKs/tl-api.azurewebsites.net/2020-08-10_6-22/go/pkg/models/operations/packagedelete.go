package operations

import (
	"openapi/pkg/models/shared"
)

type PackageDeleteQueryParams struct {
	PackageID *int32 `queryParam:"style=form,explode=true,name=PackageId"`
}

type PackageDeleteRequest struct {
	QueryParams PackageDeleteQueryParams
}

type PackageDeleteResponse struct {
	APIException                *shared.APIException
	ContentType                 string
	DefaultResponseDTOOfBoolean *shared.DefaultResponseDtoOfBoolean
	DefaultResponseDTOOfString  *shared.DefaultResponseDtoOfString
	StatusCode                  int64
}
