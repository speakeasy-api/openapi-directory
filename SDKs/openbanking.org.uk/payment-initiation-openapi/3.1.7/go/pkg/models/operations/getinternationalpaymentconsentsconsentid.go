package operations

import (
	"openapi/pkg/models/shared"
)

type GetInternationalPaymentConsentsConsentIDPathParams struct {
	ConsentID string `pathParam:"style=simple,explode=false,name=ConsentId"`
}

type GetInternationalPaymentConsentsConsentIDHeaders struct {
	Authorization          string  `header:"style=simple,explode=false,name=Authorization"`
	XCustomerUserAgent     *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
}

type GetInternationalPaymentConsentsConsentIDSecurity struct {
	TPPOAuth2Security shared.SchemeTppoAuth2Security `security:"scheme,type=oauth2"`
}

type GetInternationalPaymentConsentsConsentIDRequest struct {
	PathParams GetInternationalPaymentConsentsConsentIDPathParams
	Headers    GetInternationalPaymentConsentsConsentIDHeaders
	Security   GetInternationalPaymentConsentsConsentIDSecurity
}

type GetInternationalPaymentConsentsConsentIDResponse struct {
	Body                                 []byte
	ContentType                          string
	Headers                              map[string][]string
	OBErrorResponse1                     *shared.ObErrorResponse1
	OBWriteInternationalConsentResponse6 *shared.ObWriteInternationalConsentResponse6
	StatusCode                           int64
}
