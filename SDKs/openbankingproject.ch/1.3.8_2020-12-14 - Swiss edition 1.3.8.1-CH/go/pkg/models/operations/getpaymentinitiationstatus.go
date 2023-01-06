package operations

import (
	"openapi/pkg/models/shared"
)

type GetPaymentInitiationStatusPathParams struct {
	PaymentProduct shared.PaymentProductEnum `pathParam:"style=simple,explode=false,name=payment-product"`
	PaymentService shared.PaymentServiceEnum `pathParam:"style=simple,explode=false,name=payment-service"`
	PaymentID      string                    `pathParam:"style=simple,explode=false,name=paymentId"`
}

type GetPaymentInitiationStatusHeaders struct {
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

type GetPaymentInitiationStatusSecurity struct {
	BearerAuthOAuth *shared.SchemeBearerAuthOAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetPaymentInitiationStatusRequest struct {
	PathParams GetPaymentInitiationStatusPathParams
	Headers    GetPaymentInitiationStatusHeaders
	Security   GetPaymentInitiationStatusSecurity
}

type GetPaymentInitiationStatusResponse struct {
	ContentType                            string
	Error400NGPIS                          *shared.Error400NgPis
	Error400PIS                            *shared.Error400Pis
	Error401NGPIS                          *shared.Error401NgPis
	Error401PIS                            *shared.Error401Pis
	Error403NGPIS                          *shared.Error403NgPis
	Error403PIS                            *shared.Error403Pis
	Error404NGPIS                          *shared.Error404NgPis
	Error404PIS                            *shared.Error404Pis
	Error405NGPIS                          *shared.Error405NgPis
	Error405PIS                            *shared.Error405Pis
	Error409NGPIS                          *shared.Error409NgPis
	Error409PIS                            *shared.Error409Pis
	Headers                                map[string][]string
	StatusCode                             int64
	PaymentInitiationStatusResponse200JSON *shared.PaymentInitiationStatusResponse200JSON
	PaymentInitiationStatusResponse200XML  *string
}
