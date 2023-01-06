package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetImageLicenseListSortEnum string

const (
	GetImageLicenseListSortEnumNewest GetImageLicenseListSortEnum = "newest"
	GetImageLicenseListSortEnumOldest GetImageLicenseListSortEnum = "oldest"
)

type GetImageLicenseListQueryParams struct {
	EndDate   *time.Time                   `queryParam:"style=form,explode=true,name=end_date"`
	ImageID   *string                      `queryParam:"style=form,explode=true,name=image_id"`
	License   *string                      `queryParam:"style=form,explode=true,name=license"`
	Page      *int64                       `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64                       `queryParam:"style=form,explode=true,name=per_page"`
	Sort      *GetImageLicenseListSortEnum `queryParam:"style=form,explode=true,name=sort"`
	StartDate *time.Time                   `queryParam:"style=form,explode=true,name=start_date"`
	Username  *string                      `queryParam:"style=form,explode=true,name=username"`
}

type GetImageLicenseListSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetImageLicenseListRequest struct {
	QueryParams GetImageLicenseListQueryParams
	Security    GetImageLicenseListSecurity
}

type GetImageLicenseListResponse struct {
	ContentType             string
	DownloadHistoryDataList *interface{}
	StatusCode              int64
}
