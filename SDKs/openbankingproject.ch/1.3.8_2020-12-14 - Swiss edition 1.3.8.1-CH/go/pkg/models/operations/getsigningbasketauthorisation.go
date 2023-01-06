package operations

import (
	"openapi/pkg/models/shared"
)

type GetSigningBasketAuthorisationPathParams struct {
	BasketID string `pathParam:"style=simple,explode=false,name=basketId"`
}

type GetSigningBasketAuthorisationHeaders struct {
	Digest                  *string                   `header:"style=simple,explode=false,name=Digest"`
	PSUAccept               *string                   `header:"style=simple,explode=false,name=PSU-Accept"`
	PSUAcceptCharset        *string                   `header:"style=simple,explode=false,name=PSU-Accept-Charset"`
	PSUAcceptEncoding       *string                   `header:"style=simple,explode=false,name=PSU-Accept-Encoding"`
	PSUAcceptLanguage       *string                   `header:"style=simple,explode=false,name=PSU-Accept-Language"`
	PSUDeviceID             *string                   `header:"style=simple,explode=false,name=PSU-Device-ID"`
	PSUGeoLocation          *string                   `header:"style=simple,explode=false,name=PSU-Geo-Location"`
	PSUHTTPMethod           *shared.PsuHTTPMethodEnum `header:"style=simple,explode=false,name=PSU-Http-Method"`
	PSUIPAddress            *string                   `header:"style=simple,explode=false,name=PSU-IP-Address"`
	PSUIPPort               *string                   `header:"style=simple,explode=false,name=PSU-IP-Port"`
	PSUUserAgent            *string                   `header:"style=simple,explode=false,name=PSU-User-Agent"`
	Signature               *string                   `header:"style=simple,explode=false,name=Signature"`
	TPPSignatureCertificate *string                   `header:"style=simple,explode=false,name=TPP-Signature-Certificate"`
	XRequestID              string                    `header:"style=simple,explode=false,name=X-Request-ID"`
}

type GetSigningBasketAuthorisationSecurity struct {
	BearerAuthOAuth *shared.SchemeBearerAuthOAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetSigningBasketAuthorisationRequest struct {
	PathParams GetSigningBasketAuthorisationPathParams
	Headers    GetSigningBasketAuthorisationHeaders
	Security   GetSigningBasketAuthorisationSecurity
}

type GetSigningBasketAuthorisationResponse struct {
	ContentType    string
	Error400NGSBS  *shared.Error400NgSbs
	Error400SBS    *shared.Error400Sbs
	Error401NGSBS  *shared.Error401NgSbs
	Error401SBS    *shared.Error401Sbs
	Error403NGSBS  *shared.Error403NgSbs
	Error403SBS    *shared.Error403Sbs
	Error404NGSBS  *shared.Error404NgSbs
	Error404SBS    *shared.Error404Sbs
	Error405NGSBS  *shared.Error405NgSbs
	Error405SBS    *shared.Error405Sbs
	Error409NGSBS  *shared.Error409NgSbs
	Error409SBS    *shared.Error409Sbs
	Headers        map[string][]string
	StatusCode     int64
	Authorisations *shared.Authorisations
}
