package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePackageTypePathParams struct {
	PackageID string `pathParam:"style=simple,explode=false,name=package_id"`
}

type DeletePackageTypeRequest struct {
	PathParams DeletePackageTypePathParams
}

type DeletePackageTypeResponse struct {
	ContentType       string
	StatusCode        int64
	EmptyResponseBody *string
	ErrorResponseBody *shared.ErrorResponseBody
}
