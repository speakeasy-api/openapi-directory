package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePackageTypePathParams struct {
	PackageID string `pathParam:"style=simple,explode=false,name=package_id"`
}

type UpdatePackageTypeRequest struct {
	PathParams UpdatePackageTypePathParams
	Request    shared.UpdatePackageTypeRequestBody `request:"mediaType=application/json"`
}

type UpdatePackageTypeResponse struct {
	ContentType       string
	StatusCode        int64
	EmptyResponseBody *string
	ErrorResponseBody *shared.ErrorResponseBody
}
