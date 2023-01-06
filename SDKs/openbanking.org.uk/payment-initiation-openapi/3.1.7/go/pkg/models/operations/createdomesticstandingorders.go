package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDomesticStandingOrdersHeaders struct {
	Authorization          string  `header:"style=simple,explode=false,name=Authorization"`
	XCustomerUserAgent     *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
	XIdempotencyKey        string  `header:"style=simple,explode=false,name=x-idempotency-key"`
	XJwsSignature          string  `header:"style=simple,explode=false,name=x-jws-signature"`
}

type CreateDomesticStandingOrdersRequests struct {
	ApplicationJosePlusJwe        []byte                                `request:"mediaType=application/jose+jwe"`
	OBWriteDomesticStandingOrder3 *shared.ObWriteDomesticStandingOrder3 `request:"mediaType=application/json"`
	OBWriteDomesticStandingOrder4 *shared.ObWriteDomesticStandingOrder3 `request:"mediaType=application/json"`
}

type CreateDomesticStandingOrdersSecurity struct {
	PSUOAuth2Security shared.SchemePsuoAuth2Security `security:"scheme,type=oauth2"`
}

type CreateDomesticStandingOrdersRequest struct {
	Headers  CreateDomesticStandingOrdersHeaders
	Request  CreateDomesticStandingOrdersRequests
	Security CreateDomesticStandingOrdersSecurity
}

type CreateDomesticStandingOrdersResponse struct {
	Body                                  []byte
	ContentType                           string
	Headers                               map[string][]string
	OBErrorResponse1                      *shared.ObErrorResponse1
	OBWriteDomesticStandingOrderResponse6 *shared.ObWriteDomesticStandingOrderResponse6
	StatusCode                            int64
}
