package operations

import (
	"openapi/pkg/models/shared"
)

var FetchCredentialServerList = []string{
	"https://conversations.twilio.com",
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
	ContentType               string
	StatusCode                int64
	ConversationsV1Credential *shared.ConversationsV1Credential
}
