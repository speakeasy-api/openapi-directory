package operations

import (
	"openapi/pkg/models/shared"
)

type ListImageCategoriesQueryParams struct {
	Language *shared.LanguageEnum `queryParam:"style=form,explode=true,name=language"`
}

type ListImageCategoriesSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type ListImageCategoriesRequest struct {
	QueryParams ListImageCategoriesQueryParams
	Security    ListImageCategoriesSecurity
}

type ListImageCategoriesResponse struct {
	CategoryDataList *interface{}
	ContentType      string
	StatusCode       int64
}
