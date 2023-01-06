package operations

import (
	"openapi/pkg/models/shared"
)

type CreateInternationalStandingOrderConsentsHeaders struct {
	Authorization          string  `header:"style=simple,explode=false,name=Authorization"`
	XCustomerUserAgent     *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
	XIdempotencyKey        string  `header:"style=simple,explode=false,name=x-idempotency-key"`
	XJwsSignature          string  `header:"style=simple,explode=false,name=x-jws-signature"`
}

type CreateInternationalStandingOrderConsentsRequests struct {
	ApplicationJosePlusJwe                    []byte                                            `request:"mediaType=application/jose+jwe"`
	OBWriteInternationalStandingOrderConsent6 *shared.ObWriteInternationalStandingOrderConsent6 `request:"mediaType=application/json"`
	OBWriteInternationalStandingOrderConsent7 *shared.ObWriteInternationalStandingOrderConsent6 `request:"mediaType=application/json"`
}

type CreateInternationalStandingOrderConsentsSecurity struct {
	TPPOAuth2Security shared.SchemeTppoAuth2Security `security:"scheme,type=oauth2"`
}

type CreateInternationalStandingOrderConsentsRequest struct {
	Headers  CreateInternationalStandingOrderConsentsHeaders
	Request  CreateInternationalStandingOrderConsentsRequests
	Security CreateInternationalStandingOrderConsentsSecurity
}

type CreateInternationalStandingOrderConsentsResponse struct {
	Body                                              []byte
	ContentType                                       string
	Headers                                           map[string][]string
	OBErrorResponse1                                  *shared.ObErrorResponse1
	OBWriteInternationalStandingOrderConsentResponse7 *shared.ObWriteInternationalStandingOrderConsentResponse7
	StatusCode                                        int64
}
