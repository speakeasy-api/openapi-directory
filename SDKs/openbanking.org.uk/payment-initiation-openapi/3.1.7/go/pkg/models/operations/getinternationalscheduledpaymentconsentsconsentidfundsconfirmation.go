package operations

import (
	"openapi/pkg/models/shared"
)

type GetInternationalScheduledPaymentConsentsConsentIDFundsConfirmationPathParams struct {
	ConsentID string `pathParam:"style=simple,explode=false,name=ConsentId"`
}

type GetInternationalScheduledPaymentConsentsConsentIDFundsConfirmationHeaders struct {
	Authorization          string  `header:"style=simple,explode=false,name=Authorization"`
	XCustomerUserAgent     *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
}

type GetInternationalScheduledPaymentConsentsConsentIDFundsConfirmationSecurity struct {
	PSUOAuth2Security shared.SchemePsuoAuth2Security `security:"scheme,type=oauth2"`
}

type GetInternationalScheduledPaymentConsentsConsentIDFundsConfirmationRequest struct {
	PathParams GetInternationalScheduledPaymentConsentsConsentIDFundsConfirmationPathParams
	Headers    GetInternationalScheduledPaymentConsentsConsentIDFundsConfirmationHeaders
	Security   GetInternationalScheduledPaymentConsentsConsentIDFundsConfirmationSecurity
}

type GetInternationalScheduledPaymentConsentsConsentIDFundsConfirmationResponse struct {
	Body                              []byte
	ContentType                       string
	Headers                           map[string][]string
	OBErrorResponse1                  *shared.ObErrorResponse1
	OBWriteFundsConfirmationResponse1 *shared.ObWriteFundsConfirmationResponse1
	StatusCode                        int64
}
