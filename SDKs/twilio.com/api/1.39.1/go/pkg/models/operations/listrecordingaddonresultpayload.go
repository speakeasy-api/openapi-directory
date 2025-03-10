// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

var ListRecordingAddOnResultPayloadServerList = []string{
	"https://api.twilio.com",
}

type ListRecordingAddOnResultPayloadSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListRecordingAddOnResultPayloadPathParams struct {
	// The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording AddOnResult Payload resources to read.
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	// The SID of the AddOnResult to which the payloads to read belongs.
	AddOnResultSid string `pathParam:"style=simple,explode=false,name=AddOnResultSid"`
	// The SID of the recording to which the AddOnResult resource that contains the payloads to read belongs.
	ReferenceSid string `pathParam:"style=simple,explode=false,name=ReferenceSid"`
}

type ListRecordingAddOnResultPayloadQueryParams struct {
	// The page index. This value is simply for client state.
	Page *int64 `queryParam:"style=form,explode=true,name=Page"`
	// How many resources to return in each list page. The default is 50, and the maximum is 1000.
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
	// The page token. This is provided by the API.
	PageToken *string `queryParam:"style=form,explode=true,name=PageToken"`
}

type ListRecordingAddOnResultPayloadRequest struct {
	PathParams  ListRecordingAddOnResultPayloadPathParams
	QueryParams ListRecordingAddOnResultPayloadQueryParams
	Security    ListRecordingAddOnResultPayloadSecurity
	ServerURL   *string
}

// ListRecordingAddOnResultPayloadListRecordingAddOnResultPayloadResponse - OK
type ListRecordingAddOnResultPayloadListRecordingAddOnResultPayloadResponse struct {
	End             *int64                                                                           `json:"end,omitempty"`
	FirstPageURI    *string                                                                          `json:"first_page_uri,omitempty"`
	NextPageURI     *string                                                                          `json:"next_page_uri,omitempty"`
	Page            *int64                                                                           `json:"page,omitempty"`
	PageSize        *int64                                                                           `json:"page_size,omitempty"`
	Payloads        []shared.APIV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload `json:"payloads,omitempty"`
	PreviousPageURI *string                                                                          `json:"previous_page_uri,omitempty"`
	Start           *int64                                                                           `json:"start,omitempty"`
	URI             *string                                                                          `json:"uri,omitempty"`
}

type ListRecordingAddOnResultPayloadResponse struct {
	ContentType string
	// OK
	ListRecordingAddOnResultPayloadResponse *ListRecordingAddOnResultPayloadListRecordingAddOnResultPayloadResponse
	StatusCode                              int
	RawResponse                             *http.Response
}
