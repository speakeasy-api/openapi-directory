package operations

import (
	"openapi/pkg/models/shared"
)

type ListContributorQueryParams struct {
	Aliases      *bool   `queryParam:"style=form,explode=true,name=aliases"`
	Limit        *int32  `queryParam:"style=form,explode=true,name=limit"`
	UpdatedAfter *string `queryParam:"style=form,explode=true,name=updatedAfter"`
}

type ListContributorSecurity struct {
	Apikey shared.SchemeApikey `security:"scheme,type=apiKey,subtype=header"`
}

type ListContributorRequest struct {
	QueryParams ListContributorQueryParams
	Security    ListContributorSecurity
}

type ListContributorResponse struct {
	ContentType                             string
	StatusCode                              int64
	ListContributor200ApplicationJSONObject map[string]interface{}
}
