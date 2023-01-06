package operations

import (
	"openapi/pkg/models/shared"
)

type ListEditorialVideoCategoriesSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type ListEditorialVideoCategoriesRequest struct {
	Security ListEditorialVideoCategoriesSecurity
}

type ListEditorialVideoCategoriesResponse struct {
	ContentType                   string
	EditorialVideoCategoryResults *shared.EditorialVideoCategoryResults
	StatusCode                    int64
}
