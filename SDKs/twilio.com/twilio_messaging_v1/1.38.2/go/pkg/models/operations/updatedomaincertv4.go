package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateDomainCertV4ServerList = []string{
	"https://messaging.twilio.com",
}

type UpdateDomainCertV4PathParams struct {
	DomainSid string `pathParam:"style=simple,explode=false,name=DomainSid"`
}

type UpdateDomainCertV4UpdateDomainCertV4Request struct {
	TLSCert string `form:"name=TlsCert"`
}

type UpdateDomainCertV4Security struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateDomainCertV4Request struct {
	ServerURL  *string
	PathParams UpdateDomainCertV4PathParams
	Request    *UpdateDomainCertV4UpdateDomainCertV4Request `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateDomainCertV4Security
}

type UpdateDomainCertV4Response struct {
	ContentType             string
	StatusCode              int64
	MessagingV1DomainCertV4 *shared.MessagingV1DomainCertV4
}
