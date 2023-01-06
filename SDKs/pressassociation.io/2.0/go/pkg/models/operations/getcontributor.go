package operations

import (
	"openapi/pkg/models/shared"
)

type GetContributorPathParams struct {
	ContributorID string `pathParam:"style=simple,explode=false,name=contributorId"`
}

type GetContributorQueryParams struct {
	Aliases *bool `queryParam:"style=form,explode=true,name=aliases"`
}

type GetContributorSecurity struct {
	Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}

type GetContributorRequest struct {
	PathParams  GetContributorPathParams
	QueryParams GetContributorQueryParams
	Security    GetContributorSecurity
}

type GetContributorResponse struct {
	ContentType                            string
	StatusCode                             int64
	GetContributor200ApplicationJSONObject map[string]interface{}
}
