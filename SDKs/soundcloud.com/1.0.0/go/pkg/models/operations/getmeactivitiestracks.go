package operations

import (
	"openapi/pkg/models/shared"
)

type GetMeActivitiesTracksQueryParams struct {
	Access []shared.AccessEnum `queryParam:"style=form,explode=false,name=access"`
	Limit  *int64              `queryParam:"style=form,explode=true,name=limit"`
}

type GetMeActivitiesTracksSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
}

type GetMeActivitiesTracksRequest struct {
	QueryParams GetMeActivitiesTracksQueryParams
	Security    GetMeActivitiesTracksSecurity
}

type GetMeActivitiesTracksResponse struct {
	Activities  *shared.Activities
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
