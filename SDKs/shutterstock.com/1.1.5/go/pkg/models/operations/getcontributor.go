package operations

import (
	"openapi/pkg/models/shared"
)

type GetContributorPathParams struct {
	ContributorID string `pathParam:"style=simple,explode=false,name=contributor_id"`
}

type GetContributorSecurity struct {
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
}

type GetContributorRequest struct {
	PathParams GetContributorPathParams
	Security   GetContributorSecurity
}

type GetContributorResponse struct {
	ContentType        string
	ContributorProfile *shared.ContributorProfile
	StatusCode         int64
}
