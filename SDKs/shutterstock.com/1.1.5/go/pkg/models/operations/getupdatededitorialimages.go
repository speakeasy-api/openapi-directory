package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetUpdatedEditorialImagesSortEnum string

const (
	GetUpdatedEditorialImagesSortEnumNewest GetUpdatedEditorialImagesSortEnum = "newest"
	GetUpdatedEditorialImagesSortEnumOldest GetUpdatedEditorialImagesSortEnum = "oldest"
)

type GetUpdatedEditorialImagesTypeEnum string

const (
	GetUpdatedEditorialImagesTypeEnumEdit     GetUpdatedEditorialImagesTypeEnum = "edit"
	GetUpdatedEditorialImagesTypeEnumAddition GetUpdatedEditorialImagesTypeEnum = "addition"
)

type GetUpdatedEditorialImagesQueryParams struct {
	Country          string                             `queryParam:"style=form,explode=true,name=country"`
	Cursor           *string                            `queryParam:"style=form,explode=true,name=cursor"`
	DateTakenEnd     *string                            `queryParam:"style=form,explode=true,name=date_taken_end"`
	DateTakenStart   *string                            `queryParam:"style=form,explode=true,name=date_taken_start"`
	DateUpdatedEnd   time.Time                          `queryParam:"style=form,explode=true,name=date_updated_end"`
	DateUpdatedStart time.Time                          `queryParam:"style=form,explode=true,name=date_updated_start"`
	PerPage          *int64                             `queryParam:"style=form,explode=true,name=per_page"`
	Sort             *GetUpdatedEditorialImagesSortEnum `queryParam:"style=form,explode=true,name=sort"`
	SupplierCode     []string                           `queryParam:"style=form,explode=true,name=supplier_code"`
	Type             GetUpdatedEditorialImagesTypeEnum  `queryParam:"style=form,explode=true,name=type"`
}

type GetUpdatedEditorialImagesSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetUpdatedEditorialImagesRequest struct {
	QueryParams GetUpdatedEditorialImagesQueryParams
	Security    GetUpdatedEditorialImagesSecurity
}

type GetUpdatedEditorialImagesResponse struct {
	ContentType             string
	EditorialUpdatedResults *shared.EditorialUpdatedResults
	StatusCode              int64
}
