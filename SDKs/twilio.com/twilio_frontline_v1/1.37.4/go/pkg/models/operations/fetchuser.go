package operations

import (
	"openapi/pkg/models/shared"
)

var FetchUserServerList = []string{
	"https://frontline-api.twilio.com",
}

type FetchUserPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchUserSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchUserRequest struct {
	ServerURL  *string
	PathParams FetchUserPathParams
	Security   FetchUserSecurity
}

type FetchUserResponse struct {
	ContentType     string
	StatusCode      int64
	FrontlineV1User *shared.FrontlineV1User
}
