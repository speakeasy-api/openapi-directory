package operations

import (
	"openapi/pkg/models/shared"
)

var FetchDomainConfigServerList = []string{
	"https://messaging.twilio.com",
}

type FetchDomainConfigPathParams struct {
	DomainSid string `pathParam:"style=simple,explode=false,name=DomainSid"`
}

type FetchDomainConfigSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchDomainConfigRequest struct {
	ServerURL  *string
	PathParams FetchDomainConfigPathParams
	Security   FetchDomainConfigSecurity
}

type FetchDomainConfigResponse struct {
	ContentType             string
	StatusCode              int64
	MessagingV1DomainConfig *shared.MessagingV1DomainConfig
}
