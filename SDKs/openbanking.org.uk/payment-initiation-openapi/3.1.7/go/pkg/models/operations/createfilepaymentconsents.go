package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFilePaymentConsentsHeaders struct {
	Authorization          string  `header:"style=simple,explode=false,name=Authorization"`
	XCustomerUserAgent     *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
	XIdempotencyKey        string  `header:"style=simple,explode=false,name=x-idempotency-key"`
	XJwsSignature          string  `header:"style=simple,explode=false,name=x-jws-signature"`
}

type CreateFilePaymentConsentsRequests struct {
	ApplicationJosePlusJwe []byte                      `request:"mediaType=application/jose+jwe"`
	OBWriteFileConsent3    *shared.ObWriteFileConsent3 `request:"mediaType=application/json"`
	OBWriteFileConsent4    *shared.ObWriteFileConsent3 `request:"mediaType=application/json"`
}

type CreateFilePaymentConsentsSecurity struct {
	TPPOAuth2Security shared.SchemeTppoAuth2Security `security:"scheme,type=oauth2"`
}

type CreateFilePaymentConsentsRequest struct {
	Headers  CreateFilePaymentConsentsHeaders
	Request  CreateFilePaymentConsentsRequests
	Security CreateFilePaymentConsentsSecurity
}

type CreateFilePaymentConsentsResponse struct {
	Body                        []byte
	ContentType                 string
	Headers                     map[string][]string
	OBErrorResponse1            *shared.ObErrorResponse1
	OBWriteFileConsentResponse4 *shared.ObWriteFileConsentResponse4
	StatusCode                  int64
}
