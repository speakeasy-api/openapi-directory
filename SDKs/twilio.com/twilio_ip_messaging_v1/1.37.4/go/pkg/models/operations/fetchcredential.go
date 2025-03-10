package operations

import (
	"openapi/pkg/models/shared"
)

var FetchCredentialServerList = []string{
	"https://ip-messaging.twilio.com",
}

type FetchCredentialPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchCredentialSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchCredentialRequest struct {
	ServerURL  *string
	PathParams FetchCredentialPathParams
	Security   FetchCredentialSecurity
}

type FetchCredentialResponse struct {
	ContentType             string
	StatusCode              int64
	IPMessagingV1Credential *shared.IPMessagingV1Credential
}
