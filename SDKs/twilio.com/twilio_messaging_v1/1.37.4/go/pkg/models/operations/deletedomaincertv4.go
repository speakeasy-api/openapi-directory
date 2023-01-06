package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteDomainCertV4ServerList = []string{
	"https://messaging.twilio.com",
}

type DeleteDomainCertV4PathParams struct {
	DomainSid string `pathParam:"style=simple,explode=false,name=DomainSid"`
}

type DeleteDomainCertV4Security struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteDomainCertV4Request struct {
	ServerURL  *string
	PathParams DeleteDomainCertV4PathParams
	Security   DeleteDomainCertV4Security
}

type DeleteDomainCertV4Response struct {
	ContentType string
	StatusCode  int64
}
