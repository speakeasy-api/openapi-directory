package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateUserServers = []string{
	"https://ip-messaging.twilio.com",
}

type UpdateUserPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateUserRequestBodyUpdateUserRequest struct {
	Attributes   *string `form:"name=Attributes"`
	FriendlyName *string `form:"name=FriendlyName"`
	RoleSid      *string `form:"name=RoleSid"`
}

type UpdateUserSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateUserRequest struct {
	ServerURL  *string
	PathParams UpdateUserPathParams
	Request    *UpdateUserRequestBodyUpdateUserRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateUserSecurity
}

type UpdateUserResponse struct {
	ContentType              string
	StatusCode               int64
	IPMessagingV1ServiceUser *shared.IPMessagingV1ServiceUser
}
