package operations

import (
	"openapi/pkg/models/shared"
)

type GetMeActivitiesAllOwnQueryParams struct {
	Access []shared.AccessEnum `queryParam:"style=form,explode=false,name=access"`
	Limit  *int64              `queryParam:"style=form,explode=true,name=limit"`
}

type GetMeActivitiesAllOwnSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
}

type GetMeActivitiesAllOwnRequest struct {
	QueryParams GetMeActivitiesAllOwnQueryParams
	Security    GetMeActivitiesAllOwnSecurity
}

type GetMeActivitiesAllOwnResponse struct {
	Activities  *shared.Activities
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
