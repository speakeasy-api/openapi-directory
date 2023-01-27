package operations

import (
	"openapi/pkg/models/shared"
)

var FetchDomainCertV4ServerList = []string{
	"https://messaging.twilio.com",
}

type FetchDomainCertV4PathParams struct {
	DomainSid string `pathParam:"style=simple,explode=false,name=DomainSid"`
}

type FetchDomainCertV4Security struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchDomainCertV4Request struct {
	ServerURL  *string
	PathParams FetchDomainCertV4PathParams
	Security   FetchDomainCertV4Security
}

type FetchDomainCertV4Response struct {
	ContentType             string
	StatusCode              int64
	MessagingV1DomainCertV4 *shared.MessagingV1DomainCertV4
}
