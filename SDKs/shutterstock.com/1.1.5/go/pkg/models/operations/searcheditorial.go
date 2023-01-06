package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type SearchEditorialSortEnum string

const (
	SearchEditorialSortEnumRelevant SearchEditorialSortEnum = "relevant"
	SearchEditorialSortEnumNewest   SearchEditorialSortEnum = "newest"
	SearchEditorialSortEnumOldest   SearchEditorialSortEnum = "oldest"
)

type SearchEditorialQueryParams struct {
	Category     *string                  `queryParam:"style=form,explode=true,name=category"`
	Country      string                   `queryParam:"style=form,explode=true,name=country"`
	Cursor       *string                  `queryParam:"style=form,explode=true,name=cursor"`
	DateEnd      *time.Time               `queryParam:"style=form,explode=true,name=date_end"`
	DateStart    *time.Time               `queryParam:"style=form,explode=true,name=date_start"`
	PerPage      *int64                   `queryParam:"style=form,explode=true,name=per_page"`
	Query        *string                  `queryParam:"style=form,explode=true,name=query"`
	Sort         *SearchEditorialSortEnum `queryParam:"style=form,explode=true,name=sort"`
	SupplierCode []string                 `queryParam:"style=form,explode=true,name=supplier_code"`
}

type SearchEditorialSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type SearchEditorialRequest struct {
	QueryParams SearchEditorialQueryParams
	Security    SearchEditorialSecurity
}

type SearchEditorialResponse struct {
	ContentType            string
	EditorialSearchResults *shared.EditorialSearchResults
	StatusCode             int64
}
