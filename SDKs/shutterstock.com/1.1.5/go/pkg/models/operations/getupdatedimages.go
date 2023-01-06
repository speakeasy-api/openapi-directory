package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetUpdatedImagesSortEnum string

const (
	GetUpdatedImagesSortEnumNewest GetUpdatedImagesSortEnum = "newest"
	GetUpdatedImagesSortEnumOldest GetUpdatedImagesSortEnum = "oldest"
)

type GetUpdatedImagesTypeEnum string

const (
	GetUpdatedImagesTypeEnumAddition GetUpdatedImagesTypeEnum = "addition"
	GetUpdatedImagesTypeEnumDeletion GetUpdatedImagesTypeEnum = "deletion"
	GetUpdatedImagesTypeEnumEdit     GetUpdatedImagesTypeEnum = "edit"
)

type GetUpdatedImagesQueryParams struct {
	EndDate   *time.Time                 `queryParam:"style=form,explode=true,name=end_date"`
	Interval  *string                    `queryParam:"style=form,explode=true,name=interval"`
	Page      *int64                     `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64                     `queryParam:"style=form,explode=true,name=per_page"`
	Sort      *GetUpdatedImagesSortEnum  `queryParam:"style=form,explode=true,name=sort"`
	StartDate *time.Time                 `queryParam:"style=form,explode=true,name=start_date"`
	Type      []GetUpdatedImagesTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type GetUpdatedImagesSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetUpdatedImagesRequest struct {
	QueryParams GetUpdatedImagesQueryParams
	Security    GetUpdatedImagesSecurity
}

type GetUpdatedImagesResponse struct {
	ContentType          string
	StatusCode           int64
	UpdatedMediaDataList *interface{}
}
