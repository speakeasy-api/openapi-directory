package operations

import (
	"openapi/pkg/models/shared"
)

type CreateInternationalScheduledPaymentConsentsHeaders struct {
	Authorization          string  `header:"style=simple,explode=false,name=Authorization"`
	XCustomerUserAgent     *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
	XIdempotencyKey        string  `header:"style=simple,explode=false,name=x-idempotency-key"`
	XJwsSignature          string  `header:"style=simple,explode=false,name=x-jws-signature"`
}

type CreateInternationalScheduledPaymentConsentsRequests struct {
	ApplicationJosePlusJwe                []byte                                        `request:"mediaType=application/jose+jwe"`
	OBWriteInternationalScheduledConsent5 *shared.ObWriteInternationalScheduledConsent5 `request:"mediaType=application/json"`
	OBWriteInternationalScheduledConsent6 *shared.ObWriteInternationalScheduledConsent5 `request:"mediaType=application/json"`
}

type CreateInternationalScheduledPaymentConsentsSecurity struct {
	TPPOAuth2Security shared.SchemeTppoAuth2Security `security:"scheme,type=oauth2"`
}

type CreateInternationalScheduledPaymentConsentsRequest struct {
	Headers  CreateInternationalScheduledPaymentConsentsHeaders
	Request  CreateInternationalScheduledPaymentConsentsRequests
	Security CreateInternationalScheduledPaymentConsentsSecurity
}

type CreateInternationalScheduledPaymentConsentsResponse struct {
	Body                                          []byte
	ContentType                                   string
	Headers                                       map[string][]string
	OBErrorResponse1                              *shared.ObErrorResponse1
	OBWriteInternationalScheduledConsentResponse6 *shared.ObWriteInternationalScheduledConsentResponse6
	StatusCode                                    int64
}
