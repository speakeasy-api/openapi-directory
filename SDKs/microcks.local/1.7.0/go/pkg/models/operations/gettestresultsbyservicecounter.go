// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetTestResultsByServiceCounterSecurity struct {
	JwtBearer string `security:"scheme,type=oauth2,name=Authorization"`
}

type GetTestResultsByServiceCounterRequest struct {
	// Unique identifier of Service to manage TestResults for
	ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
}

type GetTestResultsByServiceCounterResponse struct {
	ContentType string
	// Number of TestResults for this Service in datastore
	Counter     *shared.Counter
	StatusCode  int
	RawResponse *http.Response
}
