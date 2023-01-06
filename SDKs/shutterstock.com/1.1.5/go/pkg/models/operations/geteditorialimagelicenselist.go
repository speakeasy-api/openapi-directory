package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetEditorialImageLicenseListSortEnum string

const (
	GetEditorialImageLicenseListSortEnumNewest GetEditorialImageLicenseListSortEnum = "newest"
	GetEditorialImageLicenseListSortEnumOldest GetEditorialImageLicenseListSortEnum = "oldest"
)

type GetEditorialImageLicenseListQueryParams struct {
	EndDate   *time.Time                            `queryParam:"style=form,explode=true,name=end_date"`
	ImageID   *string                               `queryParam:"style=form,explode=true,name=image_id"`
	License   *string                               `queryParam:"style=form,explode=true,name=license"`
	Page      *int64                                `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64                                `queryParam:"style=form,explode=true,name=per_page"`
	Sort      *GetEditorialImageLicenseListSortEnum `queryParam:"style=form,explode=true,name=sort"`
	StartDate *time.Time                            `queryParam:"style=form,explode=true,name=start_date"`
	Username  *string                               `queryParam:"style=form,explode=true,name=username"`
}

type GetEditorialImageLicenseListSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetEditorialImageLicenseListRequest struct {
	QueryParams GetEditorialImageLicenseListQueryParams
	Security    GetEditorialImageLicenseListSecurity
}

type GetEditorialImageLicenseListResponse struct {
	ContentType             string
	DownloadHistoryDataList *interface{}
	StatusCode              int64
}
