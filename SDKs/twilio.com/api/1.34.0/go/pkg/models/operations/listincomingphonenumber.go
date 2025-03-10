package operations

import (
	"openapi/pkg/models/shared"
)

var ListIncomingPhoneNumberServers = []string{
	"https://api.twilio.com",
}

type ListIncomingPhoneNumberPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type ListIncomingPhoneNumberQueryParams struct {
	Beta         *bool   `queryParam:"style=form,explode=true,name=Beta"`
	FriendlyName *string `queryParam:"style=form,explode=true,name=FriendlyName"`
	Origin       *string `queryParam:"style=form,explode=true,name=Origin"`
	PageSize     *int64  `queryParam:"style=form,explode=true,name=PageSize"`
	PhoneNumber  *string `queryParam:"style=form,explode=true,name=PhoneNumber"`
}

type ListIncomingPhoneNumberSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListIncomingPhoneNumberRequest struct {
	ServerURL   *string
	PathParams  ListIncomingPhoneNumberPathParams
	QueryParams ListIncomingPhoneNumberQueryParams
	Security    ListIncomingPhoneNumberSecurity
}

type ListIncomingPhoneNumber200ApplicationJSONListIncomingPhoneNumberResponse struct {
	End                  *int64                                      `json:"end"`
	FirstPageURI         *string                                     `json:"first_page_uri"`
	IncomingPhoneNumbers []shared.APIV2010AccountIncomingPhoneNumber `json:"incoming_phone_numbers"`
	NextPageURI          *string                                     `json:"next_page_uri"`
	Page                 *int64                                      `json:"page"`
	PageSize             *int64                                      `json:"page_size"`
	PreviousPageURI      *string                                     `json:"previous_page_uri"`
	Start                *int64                                      `json:"start"`
	URI                  *string                                     `json:"uri"`
}

type ListIncomingPhoneNumberResponse struct {
	ContentType                     string
	ListIncomingPhoneNumberResponse *ListIncomingPhoneNumber200ApplicationJSONListIncomingPhoneNumberResponse
	StatusCode                      int64
}
