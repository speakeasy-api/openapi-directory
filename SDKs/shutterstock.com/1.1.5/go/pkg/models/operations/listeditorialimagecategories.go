package operations

import (
	"openapi/pkg/models/shared"
)

type ListEditorialImageCategoriesSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type ListEditorialImageCategoriesRequest struct {
	Security ListEditorialImageCategoriesSecurity
}

type ListEditorialImageCategoriesResponse struct {
	ContentType                   string
	EditorialImageCategoryResults *shared.EditorialImageCategoryResults
	StatusCode                    int64
}
