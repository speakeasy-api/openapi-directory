// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetPayeeByIDV4Request struct {
	// The UUID of the payee.
	PayeeID string `pathParam:"style=simple,explode=false,name=payeeId"`
	// Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.
	// If set to true, and you have permission, the PII values will be returned as their original unmasked values.
	//
	Sensitive *bool `queryParam:"style=form,explode=true,name=sensitive"`
}

type GetPayeeByIDV4Response struct {
	ContentType string
	// Success response, request completed okay
	PayeeDetailResponseV4 *shared.PayeeDetailResponseV4
	StatusCode            int
	RawResponse           *http.Response
}
