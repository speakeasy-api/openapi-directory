package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type SearchEditorialImagesSortEnum string

const (
	SearchEditorialImagesSortEnumRelevant SearchEditorialImagesSortEnum = "relevant"
	SearchEditorialImagesSortEnumNewest   SearchEditorialImagesSortEnum = "newest"
	SearchEditorialImagesSortEnumOldest   SearchEditorialImagesSortEnum = "oldest"
)

type SearchEditorialImagesQueryParams struct {
	Category     *string                        `queryParam:"style=form,explode=true,name=category"`
	Country      string                         `queryParam:"style=form,explode=true,name=country"`
	Cursor       *string                        `queryParam:"style=form,explode=true,name=cursor"`
	DateEnd      *time.Time                     `queryParam:"style=form,explode=true,name=date_end"`
	DateStart    *time.Time                     `queryParam:"style=form,explode=true,name=date_start"`
	PerPage      *int64                         `queryParam:"style=form,explode=true,name=per_page"`
	Query        *string                        `queryParam:"style=form,explode=true,name=query"`
	Sort         *SearchEditorialImagesSortEnum `queryParam:"style=form,explode=true,name=sort"`
	SupplierCode []string                       `queryParam:"style=form,explode=true,name=supplier_code"`
}

type SearchEditorialImagesSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type SearchEditorialImagesRequest struct {
	QueryParams SearchEditorialImagesQueryParams
	Security    SearchEditorialImagesSecurity
}

type SearchEditorialImagesResponse struct {
	ContentType            string
	EditorialSearchResults *shared.EditorialSearchResults
	StatusCode             int64
}
