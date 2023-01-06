package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetEditorialVideoLicenseListSortEnum string

const (
	GetEditorialVideoLicenseListSortEnumNewest GetEditorialVideoLicenseListSortEnum = "newest"
	GetEditorialVideoLicenseListSortEnumOldest GetEditorialVideoLicenseListSortEnum = "oldest"
)

type GetEditorialVideoLicenseListQueryParams struct {
	EndDate   *time.Time                            `queryParam:"style=form,explode=true,name=end_date"`
	License   *string                               `queryParam:"style=form,explode=true,name=license"`
	Page      *int64                                `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64                                `queryParam:"style=form,explode=true,name=per_page"`
	Sort      *GetEditorialVideoLicenseListSortEnum `queryParam:"style=form,explode=true,name=sort"`
	StartDate *time.Time                            `queryParam:"style=form,explode=true,name=start_date"`
	Username  *string                               `queryParam:"style=form,explode=true,name=username"`
	VideoID   *string                               `queryParam:"style=form,explode=true,name=video_id"`
}

type GetEditorialVideoLicenseListSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetEditorialVideoLicenseListRequest struct {
	QueryParams GetEditorialVideoLicenseListQueryParams
	Security    GetEditorialVideoLicenseListSecurity
}

type GetEditorialVideoLicenseListResponse struct {
	ContentType             string
	DownloadHistoryDataList *interface{}
	StatusCode              int64
}
