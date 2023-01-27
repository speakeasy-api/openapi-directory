package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateDomainConfigServerList = []string{
	"https://messaging.twilio.com",
}

type UpdateDomainConfigPathParams struct {
	DomainSid string `pathParam:"style=simple,explode=false,name=DomainSid"`
}

type UpdateDomainConfigUpdateDomainConfigRequest struct {
	CallbackURL                *string  `form:"name=CallbackUrl"`
	FallbackURL                *string  `form:"name=FallbackUrl"`
	MessagingServiceSids       []string `form:"name=MessagingServiceSids"`
	MessagingServiceSidsAction *string  `form:"name=MessagingServiceSidsAction"`
}

type UpdateDomainConfigSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateDomainConfigRequest struct {
	ServerURL  *string
	PathParams UpdateDomainConfigPathParams
	Request    *UpdateDomainConfigUpdateDomainConfigRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateDomainConfigSecurity
}

type UpdateDomainConfigResponse struct {
	ContentType             string
	StatusCode              int64
	MessagingV1DomainConfig *shared.MessagingV1DomainConfig
}
