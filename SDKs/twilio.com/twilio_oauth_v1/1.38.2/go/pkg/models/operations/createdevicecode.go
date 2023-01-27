package operations

import (
	"openapi/pkg/models/shared"
)

var CreateDeviceCodeServerList = []string{
	"https://oauth.twilio.com",
}

type CreateDeviceCodeCreateDeviceCodeRequest struct {
	Audiences []string `form:"name=Audiences"`
	ClientSid string   `form:"name=ClientSid"`
	Scopes    []string `form:"name=Scopes"`
}

type CreateDeviceCodeSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateDeviceCodeRequest struct {
	ServerURL *string
	Request   *CreateDeviceCodeCreateDeviceCodeRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateDeviceCodeSecurity
}

type CreateDeviceCodeResponse struct {
	ContentType       string
	StatusCode        int64
	OauthV1DeviceCode *shared.OauthV1DeviceCode
}
