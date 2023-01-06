package operations

import (
	"openapi/pkg/models/shared"
)

type ListVideoCategoriesQueryParams struct {
	Language *shared.LanguageEnum `queryParam:"style=form,explode=true,name=language"`
}

type ListVideoCategoriesSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type ListVideoCategoriesRequest struct {
	QueryParams ListVideoCategoriesQueryParams
	Security    ListVideoCategoriesSecurity
}

type ListVideoCategoriesResponse struct {
	CategoryDataList *interface{}
	ContentType      string
	StatusCode       int64
}
