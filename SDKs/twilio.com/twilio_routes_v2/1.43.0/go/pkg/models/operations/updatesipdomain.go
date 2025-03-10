// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

var UpdateSipDomainServerList = []string{
	"https://routes.twilio.com",
}

type UpdateSipDomainSecurity struct {
	Password string `security:"scheme,type=http,subtype=basic,name=password"`
	Username string `security:"scheme,type=http,subtype=basic,name=username"`
}

type UpdateSipDomainUpdateSipDomainRequest struct {
	FriendlyName *string `form:"name=FriendlyName"`
	VoiceRegion  *string `form:"name=VoiceRegion"`
}

type UpdateSipDomainRequest struct {
	RequestBody *UpdateSipDomainUpdateSipDomainRequest `request:"mediaType=application/x-www-form-urlencoded"`
	SipDomain   string                                 `pathParam:"style=simple,explode=false,name=SipDomain"`
}

type UpdateSipDomainResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// OK
	RoutesV2SipDomain *shared.RoutesV2SipDomain
}
