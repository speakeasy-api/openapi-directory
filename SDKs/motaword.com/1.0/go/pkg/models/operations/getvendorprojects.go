package operations

import (
	"openapi/pkg/models/shared"
)

type GetVendorProjectsQueryParams struct {
	Completed *bool  `queryParam:"style=form,explode=true,name=completed"`
	Joined    *bool  `queryParam:"style=form,explode=true,name=joined"`
	Page      *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type GetVendorProjectsRequest struct {
	QueryParams GetVendorProjectsQueryParams
}

type GetVendorProjectsResponse struct {
	ContentType string
	Error       *shared.Error
	ProjectList *shared.ProjectList
	StatusCode  int64
}
