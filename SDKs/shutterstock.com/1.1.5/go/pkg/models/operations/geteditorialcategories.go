package operations

import (
	"openapi/pkg/models/shared"
)

type GetEditorialCategoriesSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetEditorialCategoriesRequest struct {
	Security GetEditorialCategoriesSecurity
}

type GetEditorialCategoriesResponse struct {
	ContentType              string
	EditorialCategoryResults *shared.EditorialCategoryResults
	StatusCode               int64
}
