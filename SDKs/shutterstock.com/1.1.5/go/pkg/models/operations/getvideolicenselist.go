package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetVideoLicenseListSortEnum string

const (
	GetVideoLicenseListSortEnumNewest GetVideoLicenseListSortEnum = "newest"
	GetVideoLicenseListSortEnumOldest GetVideoLicenseListSortEnum = "oldest"
)

type GetVideoLicenseListQueryParams struct {
	EndDate   *time.Time                   `queryParam:"style=form,explode=true,name=end_date"`
	License   *string                      `queryParam:"style=form,explode=true,name=license"`
	Page      *int64                       `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64                       `queryParam:"style=form,explode=true,name=per_page"`
	Sort      *GetVideoLicenseListSortEnum `queryParam:"style=form,explode=true,name=sort"`
	StartDate *time.Time                   `queryParam:"style=form,explode=true,name=start_date"`
	Username  *string                      `queryParam:"style=form,explode=true,name=username"`
	VideoID   *string                      `queryParam:"style=form,explode=true,name=video_id"`
}

type GetVideoLicenseListSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetVideoLicenseListRequest struct {
	QueryParams GetVideoLicenseListQueryParams
	Security    GetVideoLicenseListSecurity
}

type GetVideoLicenseListResponse struct {
	ContentType             string
	DownloadHistoryDataList *interface{}
	StatusCode              int64
}
