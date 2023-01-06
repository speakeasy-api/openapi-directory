package operations

import (
	"openapi/pkg/models/shared"
)

type TrackPackagePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type TrackPackageQueryParams struct {
	Key *string `queryParam:"style=form,explode=true,name=key"`
}

type TrackPackageRequest struct {
	PathParams  TrackPackagePathParams
	QueryParams TrackPackageQueryParams
}

type TrackPackageResponse struct {
	ContentType   string
	Error         *shared.Error
	PackageStatus *shared.PackageStatus
	StatusCode    int64
}
