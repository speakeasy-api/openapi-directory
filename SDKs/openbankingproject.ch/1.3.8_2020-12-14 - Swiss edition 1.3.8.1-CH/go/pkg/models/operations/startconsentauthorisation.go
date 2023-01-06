package operations

import (
	"openapi/pkg/models/shared"
)

type StartConsentAuthorisationPathParams struct {
	ConsentID string `pathParam:"style=simple,explode=false,name=consentId"`
}

type StartConsentAuthorisationHeaders struct {
	Digest                          *string                   `header:"style=simple,explode=false,name=Digest"`
	PSUAccept                       *string                   `header:"style=simple,explode=false,name=PSU-Accept"`
	PSUAcceptCharset                *string                   `header:"style=simple,explode=false,name=PSU-Accept-Charset"`
	PSUAcceptEncoding               *string                   `header:"style=simple,explode=false,name=PSU-Accept-Encoding"`
	PSUAcceptLanguage               *string                   `header:"style=simple,explode=false,name=PSU-Accept-Language"`
	PSUCorporateID                  *string                   `header:"style=simple,explode=false,name=PSU-Corporate-ID"`
	PSUCorporateIDType              *string                   `header:"style=simple,explode=false,name=PSU-Corporate-ID-Type"`
	PSUDeviceID                     *string                   `header:"style=simple,explode=false,name=PSU-Device-ID"`
	PSUGeoLocation                  *string                   `header:"style=simple,explode=false,name=PSU-Geo-Location"`
	PSUHTTPMethod                   *shared.PsuHTTPMethodEnum `header:"style=simple,explode=false,name=PSU-Http-Method"`
	PSUID                           *string                   `header:"style=simple,explode=false,name=PSU-ID"`
	PSUIDType                       *string                   `header:"style=simple,explode=false,name=PSU-ID-Type"`
	PSUIPAddress                    *string                   `header:"style=simple,explode=false,name=PSU-IP-Address"`
	PSUIPPort                       *string                   `header:"style=simple,explode=false,name=PSU-IP-Port"`
	PSUUserAgent                    *string                   `header:"style=simple,explode=false,name=PSU-User-Agent"`
	Signature                       *string                   `header:"style=simple,explode=false,name=Signature"`
	TPPNokRedirectURI               *string                   `header:"style=simple,explode=false,name=TPP-Nok-Redirect-URI"`
	TPPNotificationContentPreferred *string                   `header:"style=simple,explode=false,name=TPP-Notification-Content-Preferred"`
	TPPNotificationURI              *string                   `header:"style=simple,explode=false,name=TPP-Notification-URI"`
	TPPRedirectPreferred            *bool                     `header:"style=simple,explode=false,name=TPP-Redirect-Preferred"`
	TPPRedirectURI                  *string                   `header:"style=simple,explode=false,name=TPP-Redirect-URI"`
	TPPSignatureCertificate         *string                   `header:"style=simple,explode=false,name=TPP-Signature-Certificate"`
	XRequestID                      string                    `header:"style=simple,explode=false,name=X-Request-ID"`
}

type StartConsentAuthorisationSecurity struct {
	BearerAuthOAuth *shared.SchemeBearerAuthOAuth `security:"scheme,type=http,subtype=bearer"`
}

type StartConsentAuthorisationRequest struct {
	PathParams StartConsentAuthorisationPathParams
	Headers    StartConsentAuthorisationHeaders
	Request    *interface{} `request:"mediaType=application/json"`
	Security   StartConsentAuthorisationSecurity
}

type StartConsentAuthorisationResponse struct {
	ContentType             string
	Error400AIS             *shared.Error400Ais
	Error400NGAIS           *shared.Error400NgAis
	Error401AIS             *shared.Error401Ais
	Error401NGAIS           *shared.Error401NgAis
	Error403AIS             *shared.Error403Ais
	Error403NGAIS           *shared.Error403NgAis
	Error404AIS             *shared.Error404Ais
	Error404NGAIS           *shared.Error404NgAis
	Error405AIS             *shared.Error405Ais
	Error405NGAIS           *shared.Error405NgAis
	Error406AIS             *shared.Error406Ais
	Error406NGAIS           *shared.Error406NgAis
	Error409AIS             *shared.Error409Ais
	Error409NGAIS           *shared.Error409NgAis
	Error429AIS             *shared.Error429Ais
	Error429NGAIS           *shared.Error429NgAis
	Headers                 map[string][]string
	StatusCode              int64
	StartScaprocessResponse *shared.StartScaprocessResponse
}
