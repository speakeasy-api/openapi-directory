// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type CreateTaxRatesSecurity struct {
	ZettleOauth string `security:"scheme,type=oauth2,name=Authorization"`
}

type CreateTaxRatesResponse struct {
	ContentType string
	// Invalid request body
	ErrorResponse *shared.ErrorResponse
	StatusCode    int
	RawResponse   *http.Response
	// Tax rates created
	TaxRatesResponse *shared.TaxRatesResponse
}
