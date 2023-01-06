package operations

import (
	"openapi/pkg/models/shared"
)

type GetMeActivitiesQueryParams struct {
	Access []shared.AccessEnum `queryParam:"style=form,explode=false,name=access"`
	Limit  *int64              `queryParam:"style=form,explode=true,name=limit"`
}

type GetMeActivitiesSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
}

type GetMeActivitiesRequest struct {
	QueryParams GetMeActivitiesQueryParams
	Security    GetMeActivitiesSecurity
}

type GetMeActivitiesResponse struct {
	Activities  *shared.Activities
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
