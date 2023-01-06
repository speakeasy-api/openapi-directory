package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetUpdatedVideosSortEnum string

const (
	GetUpdatedVideosSortEnumNewest GetUpdatedVideosSortEnum = "newest"
	GetUpdatedVideosSortEnumOldest GetUpdatedVideosSortEnum = "oldest"
)

type GetUpdatedVideosQueryParams struct {
	EndDate   *time.Time                `queryParam:"style=form,explode=true,name=end_date"`
	Interval  *string                   `queryParam:"style=form,explode=true,name=interval"`
	Page      *int64                    `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64                    `queryParam:"style=form,explode=true,name=per_page"`
	Sort      *GetUpdatedVideosSortEnum `queryParam:"style=form,explode=true,name=sort"`
	StartDate *time.Time                `queryParam:"style=form,explode=true,name=start_date"`
}

type GetUpdatedVideosSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetUpdatedVideosRequest struct {
	QueryParams GetUpdatedVideosQueryParams
	Security    GetUpdatedVideosSecurity
}

type GetUpdatedVideosResponse struct {
	ContentType          string
	StatusCode           int64
	UpdatedMediaDataList *interface{}
}
