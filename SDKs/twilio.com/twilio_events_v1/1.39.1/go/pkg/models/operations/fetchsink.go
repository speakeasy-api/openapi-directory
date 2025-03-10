// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

var FetchSinkServerList = []string{
	"https://events.twilio.com",
}

type FetchSinkSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchSinkPathParams struct {
	// A 34 character string that uniquely identifies this Sink.
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchSinkRequest struct {
	PathParams FetchSinkPathParams
	Security   FetchSinkSecurity
	ServerURL  *string
}

type FetchSinkResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// OK
	EventsV1Sink *shared.EventsV1Sink
}
