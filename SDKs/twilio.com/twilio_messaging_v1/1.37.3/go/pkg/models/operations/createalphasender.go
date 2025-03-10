package operations

import (
	"openapi/pkg/models/shared"
)

var CreateAlphaSenderServerList = []string{
	"https://messaging.twilio.com",
}

type CreateAlphaSenderPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateAlphaSenderCreateAlphaSenderRequest struct {
	AlphaSender string `form:"name=AlphaSender"`
}

type CreateAlphaSenderSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateAlphaSenderRequest struct {
	ServerURL  *string
	PathParams CreateAlphaSenderPathParams
	Request    *CreateAlphaSenderCreateAlphaSenderRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateAlphaSenderSecurity
}

type CreateAlphaSenderResponse struct {
	ContentType                   string
	StatusCode                    int64
	MessagingV1ServiceAlphaSender *shared.MessagingV1ServiceAlphaSender
}
