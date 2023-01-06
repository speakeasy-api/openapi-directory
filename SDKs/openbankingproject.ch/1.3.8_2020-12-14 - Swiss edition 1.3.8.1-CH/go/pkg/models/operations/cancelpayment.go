package operations

import (
	"openapi/pkg/models/shared"
)

type CancelPaymentPathParams struct {
	PaymentProduct shared.PaymentProductEnum `pathParam:"style=simple,explode=false,name=payment-product"`
	PaymentService shared.PaymentServiceEnum `pathParam:"style=simple,explode=false,name=payment-service"`
	PaymentID      string                    `pathParam:"style=simple,explode=false,name=paymentId"`
}

type CancelPaymentHeaders struct {
	Digest                            *string                   `header:"style=simple,explode=false,name=Digest"`
	PSUAccept                         *string                   `header:"style=simple,explode=false,name=PSU-Accept"`
	PSUAcceptCharset                  *string                   `header:"style=simple,explode=false,name=PSU-Accept-Charset"`
	PSUAcceptEncoding                 *string                   `header:"style=simple,explode=false,name=PSU-Accept-Encoding"`
	PSUAcceptLanguage                 *string                   `header:"style=simple,explode=false,name=PSU-Accept-Language"`
	PSUDeviceID                       *string                   `header:"style=simple,explode=false,name=PSU-Device-ID"`
	PSUGeoLocation                    *string                   `header:"style=simple,explode=false,name=PSU-Geo-Location"`
	PSUHTTPMethod                     *shared.PsuHTTPMethodEnum `header:"style=simple,explode=false,name=PSU-Http-Method"`
	PSUIPAddress                      *string                   `header:"style=simple,explode=false,name=PSU-IP-Address"`
	PSUIPPort                         *string                   `header:"style=simple,explode=false,name=PSU-IP-Port"`
	PSUUserAgent                      *string                   `header:"style=simple,explode=false,name=PSU-User-Agent"`
	Signature                         *string                   `header:"style=simple,explode=false,name=Signature"`
	TPPExplicitAuthorisationPreferred *bool                     `header:"style=simple,explode=false,name=TPP-Explicit-Authorisation-Preferred"`
	TPPNokRedirectURI                 *string                   `header:"style=simple,explode=false,name=TPP-Nok-Redirect-URI"`
	TPPRedirectPreferred              *bool                     `header:"style=simple,explode=false,name=TPP-Redirect-Preferred"`
	TPPRedirectURI                    *string                   `header:"style=simple,explode=false,name=TPP-Redirect-URI"`
	TPPSignatureCertificate           *string                   `header:"style=simple,explode=false,name=TPP-Signature-Certificate"`
	XRequestID                        string                    `header:"style=simple,explode=false,name=X-Request-ID"`
}

type CancelPaymentSecurity struct {
	BearerAuthOAuth *shared.SchemeBearerAuthOAuth `security:"scheme,type=http,subtype=bearer"`
}

type CancelPaymentRequest struct {
	PathParams CancelPaymentPathParams
	Headers    CancelPaymentHeaders
	Security   CancelPaymentSecurity
}

type CancelPaymentResponse struct {
	ContentType                        string
	Error400NGPIS                      *shared.Error400NgPis
	Error400PIS                        *shared.Error400Pis
	Error401NGPIS                      *shared.Error401NgPis
	Error401PIS                        *shared.Error401Pis
	Error403NGPIS                      *shared.Error403NgPis
	Error403PIS                        *shared.Error403Pis
	Error404NGPIS                      *shared.Error404NgPis
	Error404PIS                        *shared.Error404Pis
	Error405NGPISCANC                  *shared.Error405NgPisCanc
	Error405PISCANC                    *shared.Error405PisCanc
	Error409NGPIS                      *shared.Error409NgPis
	Error409PIS                        *shared.Error409Pis
	Headers                            map[string][]string
	StatusCode                         int64
	PaymentInitiationCancelResponse202 *shared.PaymentInitiationCancelResponse202
}
