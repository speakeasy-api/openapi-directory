// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetPaymentDetailsV4PathParams struct {
	// Payment Id
	PaymentID string `pathParam:"style=simple,explode=false,name=paymentId"`
}

type GetPaymentDetailsV4QueryParams struct {
	// Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.
	// If set to true, and you have permission, the PII values will be returned as their original unmasked values.
	//
	Sensitive *bool `queryParam:"style=form,explode=true,name=sensitive"`
}

type GetPaymentDetailsV4Request struct {
	PathParams  GetPaymentDetailsV4PathParams
	QueryParams GetPaymentDetailsV4QueryParams
}

type GetPaymentDetailsV4Response struct {
	ContentType string
	// 200 response, request completed okay
	PaymentResponseV4 *shared.PaymentResponseV4
	StatusCode        int
	RawResponse       *http.Response
	// Invalid request. See Error message payload for details of failure
	InlineResponse400 *shared.InlineResponse400
	// Invalid access token. May be expired or invalid
	InlineResponse401 *shared.InlineResponse401
	// The authentication does not have permissions to access the resource
	// This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions
	//
	InlineResponse403 *shared.InlineResponse403
	// The resource was not found or is no longer available
	//
	InlineResponse404 *shared.InlineResponse404
}
