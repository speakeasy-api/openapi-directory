package operations

import (
	"openapi/pkg/models/shared"
)

type GetPackageTypeByIDPathParams struct {
	PackageID string `pathParam:"style=simple,explode=false,name=package_id"`
}

type GetPackageTypeByIDRequest struct {
	PathParams GetPackageTypeByIDPathParams
}

type GetPackageTypeByIDResponse struct {
	ContentType                    string
	StatusCode                     int64
	ErrorResponseBody              *shared.ErrorResponseBody
	GetPackageTypeByIDResponseBody *shared.GetPackageTypeByIDResponseBody
}
