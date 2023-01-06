package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetTrackLicenseListSortEnum string

const (
	GetTrackLicenseListSortEnumNewest GetTrackLicenseListSortEnum = "newest"
	GetTrackLicenseListSortEnumOldest GetTrackLicenseListSortEnum = "oldest"
)

type GetTrackLicenseListQueryParams struct {
	AudioID   *string                      `queryParam:"style=form,explode=true,name=audio_id"`
	EndDate   *time.Time                   `queryParam:"style=form,explode=true,name=end_date"`
	License   *string                      `queryParam:"style=form,explode=true,name=license"`
	Page      *int64                       `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64                       `queryParam:"style=form,explode=true,name=per_page"`
	Sort      *GetTrackLicenseListSortEnum `queryParam:"style=form,explode=true,name=sort"`
	StartDate *time.Time                   `queryParam:"style=form,explode=true,name=start_date"`
	Username  *string                      `queryParam:"style=form,explode=true,name=username"`
}

type GetTrackLicenseListSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetTrackLicenseListRequest struct {
	QueryParams GetTrackLicenseListQueryParams
	Security    GetTrackLicenseListSecurity
}

type GetTrackLicenseListResponse struct {
	ContentType             string
	DownloadHistoryDataList *interface{}
	StatusCode              int64
}
