package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersUserIDWebProfilesPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type GetUsersUserIDWebProfilesQueryParams struct {
	Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
}

type GetUsersUserIDWebProfilesSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
	ClientID   shared.SchemeClientID   `security:"scheme,type=apiKey,subtype=query"`
}

type GetUsersUserIDWebProfilesRequest struct {
	PathParams  GetUsersUserIDWebProfilesPathParams
	QueryParams GetUsersUserIDWebProfilesQueryParams
	Security    GetUsersUserIDWebProfilesSecurity
}

type GetUsersUserIDWebProfilesResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
	WebProfiles []shared.WebProfiles
}
