package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetV2EditorialUpdatedSortEnum string

const (
	GetV2EditorialUpdatedSortEnumNewest GetV2EditorialUpdatedSortEnum = "newest"
	GetV2EditorialUpdatedSortEnumOldest GetV2EditorialUpdatedSortEnum = "oldest"
)

type GetV2EditorialUpdatedTypeEnum string

const (
	GetV2EditorialUpdatedTypeEnumEdit     GetV2EditorialUpdatedTypeEnum = "edit"
	GetV2EditorialUpdatedTypeEnumAddition GetV2EditorialUpdatedTypeEnum = "addition"
)

type GetV2EditorialUpdatedQueryParams struct {
	Country          string                         `queryParam:"style=form,explode=true,name=country"`
	Cursor           *string                        `queryParam:"style=form,explode=true,name=cursor"`
	DateTakenEnd     *string                        `queryParam:"style=form,explode=true,name=date_taken_end"`
	DateTakenStart   *string                        `queryParam:"style=form,explode=true,name=date_taken_start"`
	DateUpdatedEnd   time.Time                      `queryParam:"style=form,explode=true,name=date_updated_end"`
	DateUpdatedStart time.Time                      `queryParam:"style=form,explode=true,name=date_updated_start"`
	PerPage          *int64                         `queryParam:"style=form,explode=true,name=per_page"`
	Sort             *GetV2EditorialUpdatedSortEnum `queryParam:"style=form,explode=true,name=sort"`
	SupplierCode     []string                       `queryParam:"style=form,explode=true,name=supplier_code"`
	Type             GetV2EditorialUpdatedTypeEnum  `queryParam:"style=form,explode=true,name=type"`
}

type GetV2EditorialUpdatedSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetV2EditorialUpdatedRequest struct {
	QueryParams GetV2EditorialUpdatedQueryParams
	Security    GetV2EditorialUpdatedSecurity
}

type GetV2EditorialUpdatedResponse struct {
	ContentType             string
	EditorialUpdatedResults *shared.EditorialUpdatedResults
	StatusCode              int64
}
