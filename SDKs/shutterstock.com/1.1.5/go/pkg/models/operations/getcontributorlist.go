package operations

import (
	"openapi/pkg/models/shared"
)

type GetContributorListQueryParams struct {
	ID []string `queryParam:"style=form,explode=true,name=id"`
}

type GetContributorListSecurity struct {
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
}

type GetContributorListRequest struct {
	QueryParams GetContributorListQueryParams
	Security    GetContributorListSecurity
}

type GetContributorListResponse struct {
	ContentType                string
	ContributorProfileDataList *interface{}
	StatusCode                 int64
}
