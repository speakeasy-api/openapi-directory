package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDomesticScheduledPaymentConsentsHeaders struct {
	Authorization          string  `header:"style=simple,explode=false,name=Authorization"`
	XCustomerUserAgent     *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
	XIdempotencyKey        string  `header:"style=simple,explode=false,name=x-idempotency-key"`
	XJwsSignature          string  `header:"style=simple,explode=false,name=x-jws-signature"`
}

type CreateDomesticScheduledPaymentConsentsRequests struct {
	ApplicationJosePlusJwe           []byte                                   `request:"mediaType=application/jose+jwe"`
	OBWriteDomesticScheduledConsent4 *shared.ObWriteDomesticScheduledConsent4 `request:"mediaType=application/json"`
	OBWriteDomesticScheduledConsent5 *shared.ObWriteDomesticScheduledConsent4 `request:"mediaType=application/json"`
}

type CreateDomesticScheduledPaymentConsentsSecurity struct {
	TPPOAuth2Security shared.SchemeTppoAuth2Security `security:"scheme,type=oauth2"`
}

type CreateDomesticScheduledPaymentConsentsRequest struct {
	Headers  CreateDomesticScheduledPaymentConsentsHeaders
	Request  CreateDomesticScheduledPaymentConsentsRequests
	Security CreateDomesticScheduledPaymentConsentsSecurity
}

type CreateDomesticScheduledPaymentConsentsResponse struct {
	Body                                     []byte
	ContentType                              string
	Headers                                  map[string][]string
	OBErrorResponse1                         *shared.ObErrorResponse1
	OBWriteDomesticScheduledConsentResponse5 *shared.ObWriteDomesticScheduledConsentResponse5
	StatusCode                               int64
}
