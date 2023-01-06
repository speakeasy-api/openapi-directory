package operations

import (
	"openapi/pkg/models/shared"
)

type GetContributorCollectionsPathParams struct {
	ContributorID string `pathParam:"style=simple,explode=false,name=contributor_id"`
	ID            string `pathParam:"style=simple,explode=false,name=id"`
}

type GetContributorCollectionsSecurity struct {
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
}

type GetContributorCollectionsRequest struct {
	PathParams GetContributorCollectionsPathParams
	Security   GetContributorCollectionsSecurity
}

type GetContributorCollectionsResponse struct {
	Collection  *shared.Collection
	ContentType string
	StatusCode  int64
}
