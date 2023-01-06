package operations

import (
	"openapi/pkg/models/shared"
)

type GetVendorProjectsByUserIDPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=userId"`
}

type GetVendorProjectsByUserIDQueryParams struct {
	Completed *bool  `queryParam:"style=form,explode=true,name=completed"`
	Joined    *bool  `queryParam:"style=form,explode=true,name=joined"`
	Page      *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type GetVendorProjectsByUserIDRequest struct {
	PathParams  GetVendorProjectsByUserIDPathParams
	QueryParams GetVendorProjectsByUserIDQueryParams
}

type GetVendorProjectsByUserIDResponse struct {
	ContentType string
	Error       *shared.Error
	ProjectList *shared.ProjectList
	StatusCode  int64
}
