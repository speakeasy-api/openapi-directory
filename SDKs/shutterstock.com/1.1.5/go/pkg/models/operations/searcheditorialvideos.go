package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type SearchEditorialVideosResolutionEnum string

const (
	SearchEditorialVideosResolutionEnumFourk              SearchEditorialVideosResolutionEnum = "4k"
	SearchEditorialVideosResolutionEnumHighDefinition     SearchEditorialVideosResolutionEnum = "high_definition"
	SearchEditorialVideosResolutionEnumStandardDefinition SearchEditorialVideosResolutionEnum = "standard_definition"
)

type SearchEditorialVideosSortEnum string

const (
	SearchEditorialVideosSortEnumRelevant SearchEditorialVideosSortEnum = "relevant"
	SearchEditorialVideosSortEnumNewest   SearchEditorialVideosSortEnum = "newest"
	SearchEditorialVideosSortEnumOldest   SearchEditorialVideosSortEnum = "oldest"
)

type SearchEditorialVideosQueryParams struct {
	Category     *string                              `queryParam:"style=form,explode=true,name=category"`
	Country      string                               `queryParam:"style=form,explode=true,name=country"`
	Cursor       *string                              `queryParam:"style=form,explode=true,name=cursor"`
	DateEnd      *time.Time                           `queryParam:"style=form,explode=true,name=date_end"`
	DateStart    *time.Time                           `queryParam:"style=form,explode=true,name=date_start"`
	Fps          *float64                             `queryParam:"style=form,explode=true,name=fps"`
	PerPage      *int64                               `queryParam:"style=form,explode=true,name=per_page"`
	Query        *string                              `queryParam:"style=form,explode=true,name=query"`
	Resolution   *SearchEditorialVideosResolutionEnum `queryParam:"style=form,explode=true,name=resolution"`
	Sort         *SearchEditorialVideosSortEnum       `queryParam:"style=form,explode=true,name=sort"`
	SupplierCode []string                             `queryParam:"style=form,explode=true,name=supplier_code"`
}

type SearchEditorialVideosSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type SearchEditorialVideosRequest struct {
	QueryParams SearchEditorialVideosQueryParams
	Security    SearchEditorialVideosSecurity
}

type SearchEditorialVideosResponse struct {
	ContentType                 string
	EditorialVideoSearchResults *shared.EditorialVideoSearchResults
	StatusCode                  int64
}
