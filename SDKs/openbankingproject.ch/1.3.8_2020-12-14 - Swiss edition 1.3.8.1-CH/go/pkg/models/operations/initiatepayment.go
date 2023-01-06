package operations

import (
	"openapi/pkg/models/shared"
)

type InitiatePaymentPathParams struct {
	PaymentProduct shared.PaymentProductEnum `pathParam:"style=simple,explode=false,name=payment-product"`
	PaymentService shared.PaymentServiceEnum `pathParam:"style=simple,explode=false,name=payment-service"`
}

type InitiatePaymentHeaders struct {
	ConsentID                         *string                   `header:"style=simple,explode=false,name=Consent-ID"`
	Digest                            *string                   `header:"style=simple,explode=false,name=Digest"`
	PSUAccept                         *string                   `header:"style=simple,explode=false,name=PSU-Accept"`
	PSUAcceptCharset                  *string                   `header:"style=simple,explode=false,name=PSU-Accept-Charset"`
	PSUAcceptEncoding                 *string                   `header:"style=simple,explode=false,name=PSU-Accept-Encoding"`
	PSUAcceptLanguage                 *string                   `header:"style=simple,explode=false,name=PSU-Accept-Language"`
	PSUCorporateID                    *string                   `header:"style=simple,explode=false,name=PSU-Corporate-ID"`
	PSUCorporateIDType                *string                   `header:"style=simple,explode=false,name=PSU-Corporate-ID-Type"`
	PSUDeviceID                       *string                   `header:"style=simple,explode=false,name=PSU-Device-ID"`
	PSUGeoLocation                    *string                   `header:"style=simple,explode=false,name=PSU-Geo-Location"`
	PSUHTTPMethod                     *shared.PsuHTTPMethodEnum `header:"style=simple,explode=false,name=PSU-Http-Method"`
	PSUID                             *string                   `header:"style=simple,explode=false,name=PSU-ID"`
	PSUIDType                         *string                   `header:"style=simple,explode=false,name=PSU-ID-Type"`
	PSUIPAddress                      string                    `header:"style=simple,explode=false,name=PSU-IP-Address"`
	PSUIPPort                         *string                   `header:"style=simple,explode=false,name=PSU-IP-Port"`
	PSUUserAgent                      *string                   `header:"style=simple,explode=false,name=PSU-User-Agent"`
	Signature                         *string                   `header:"style=simple,explode=false,name=Signature"`
	TPPBrandLoggingInformation        *string                   `header:"style=simple,explode=false,name=TPP-Brand-Logging-Information"`
	TPPExplicitAuthorisationPreferred *bool                     `header:"style=simple,explode=false,name=TPP-Explicit-Authorisation-Preferred"`
	TPPNokRedirectURI                 *string                   `header:"style=simple,explode=false,name=TPP-Nok-Redirect-URI"`
	TPPNotificationContentPreferred   *string                   `header:"style=simple,explode=false,name=TPP-Notification-Content-Preferred"`
	TPPNotificationURI                *string                   `header:"style=simple,explode=false,name=TPP-Notification-URI"`
	TPPRedirectPreferred              *bool                     `header:"style=simple,explode=false,name=TPP-Redirect-Preferred"`
	TPPRedirectURI                    *string                   `header:"style=simple,explode=false,name=TPP-Redirect-URI"`
	TPPRejectionNoFundsPreferred      *bool                     `header:"style=simple,explode=false,name=TPP-Rejection-NoFunds-Preferred"`
	TPPSignatureCertificate           *string                   `header:"style=simple,explode=false,name=TPP-Signature-Certificate"`
	XRequestID                        string                    `header:"style=simple,explode=false,name=X-Request-ID"`
}

type InitiatePaymentRequests struct {
	ApplicationXML                         []byte                                         `request:"mediaType=application/xml"`
	OneOf                                  *interface{}                                   `request:"mediaType=application/json"`
	PeriodicPaymentInitiationMultipartBody *shared.PeriodicPaymentInitiationMultipartBody `request:"mediaType=multipart/form-data"`
}

type InitiatePaymentSecurity struct {
	BearerAuthOAuth *shared.SchemeBearerAuthOAuth `security:"scheme,type=http,subtype=bearer"`
}

type InitiatePaymentRequest struct {
	PathParams InitiatePaymentPathParams
	Headers    InitiatePaymentHeaders
	Request    InitiatePaymentRequests
	Security   InitiatePaymentSecurity
}

type InitiatePaymentResponse struct {
	ContentType                        string
	Error400NGPIS                      *shared.Error400NgPis
	Error400PIS                        *shared.Error400Pis
	Error401NGPIS                      *shared.Error401NgPis
	Error401PIS                        *shared.Error401Pis
	Error403NGPIS                      *shared.Error403NgPis
	Error403PIS                        *shared.Error403Pis
	Error404NGPIS                      *shared.Error404NgPis
	Error404PIS                        *shared.Error404Pis
	Error405NGPIS                      *shared.Error405NgPis
	Error405PIS                        *shared.Error405Pis
	Error409NGPIS                      *shared.Error409NgPis
	Error409PIS                        *shared.Error409Pis
	Headers                            map[string][]string
	StatusCode                         int64
	PaymentInitationRequestResponse201 *shared.PaymentInitationRequestResponse201
}
