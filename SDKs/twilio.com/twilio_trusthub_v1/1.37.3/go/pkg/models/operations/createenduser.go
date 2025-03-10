package operations

import (
	"openapi/pkg/models/shared"
)

var CreateEndUserServerList = []string{
	"https://trusthub.twilio.com",
}

type CreateEndUserCreateEndUserRequest struct {
	Attributes   *interface{} `form:"name=Attributes"`
	FriendlyName string       `form:"name=FriendlyName"`
	Type         string       `form:"name=Type"`
}

type CreateEndUserSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateEndUserRequest struct {
	ServerURL *string
	Request   *CreateEndUserCreateEndUserRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateEndUserSecurity
}

type CreateEndUserResponse struct {
	ContentType       string
	StatusCode        int64
	TrusthubV1EndUser *shared.TrusthubV1EndUser
}
