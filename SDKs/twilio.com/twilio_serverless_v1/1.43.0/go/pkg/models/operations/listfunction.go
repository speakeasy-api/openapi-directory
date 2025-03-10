// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

var ListFunctionServerList = []string{
	"https://serverless.twilio.com",
}

type ListFunctionSecurity struct {
	Password string `security:"scheme,type=http,subtype=basic,name=password"`
	Username string `security:"scheme,type=http,subtype=basic,name=username"`
}

type ListFunctionRequest struct {
	// The page index. This value is simply for client state.
	Page *int64 `queryParam:"style=form,explode=true,name=Page"`
	// How many resources to return in each list page. The default is 50, and the maximum is 1000.
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
	// The page token. This is provided by the API.
	PageToken *string `queryParam:"style=form,explode=true,name=PageToken"`
	// The SID of the Service to read the Function resources from.
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListFunctionListFunctionResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

// ListFunctionListFunctionResponse - OK
type ListFunctionListFunctionResponse struct {
	Functions []shared.ServerlessV1ServiceFunction  `json:"functions,omitempty"`
	Meta      *ListFunctionListFunctionResponseMeta `json:"meta,omitempty"`
}

type ListFunctionResponse struct {
	ContentType string
	// OK
	ListFunctionResponse *ListFunctionListFunctionResponse
	StatusCode           int
	RawResponse          *http.Response
}
