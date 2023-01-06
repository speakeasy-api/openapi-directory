package operations

import (
	"openapi/pkg/models/shared"
)

type PackagePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PackageQueryParams struct {
	Async *int64 `queryParam:"style=form,explode=true,name=async"`
}

type PackageRequest struct {
	PathParams  PackagePathParams
	QueryParams PackageQueryParams
}

type PackageResponse struct {
	ContentType                                  string
	Error                                        *shared.Error
	StatusCode                                   int64
	Package200ApplicationOctetStreamBinaryString []byte
}
