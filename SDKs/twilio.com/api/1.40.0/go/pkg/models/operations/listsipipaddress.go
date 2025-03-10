// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

var ListSipIPAddressServerList = []string{
	"https://api.twilio.com",
}

type ListSipIPAddressSecurity struct {
	Password string `security:"scheme,type=http,subtype=basic,name=password"`
	Username string `security:"scheme,type=http,subtype=basic,name=username"`
}

type ListSipIPAddressRequest struct {
	// The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource.
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	// The IpAccessControlList Sid that identifies the IpAddress resources to read.
	IPAccessControlListSid string `pathParam:"style=simple,explode=false,name=IpAccessControlListSid"`
	// The page index. This value is simply for client state.
	Page *int64 `queryParam:"style=form,explode=true,name=Page"`
	// How many resources to return in each list page. The default is 50, and the maximum is 1000.
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
	// The page token. This is provided by the API.
	PageToken *string `queryParam:"style=form,explode=true,name=PageToken"`
}

// ListSipIPAddressListSipIPAddressResponse - OK
type ListSipIPAddressListSipIPAddressResponse struct {
	End             *int64                                                        `json:"end,omitempty"`
	FirstPageURI    *string                                                       `json:"first_page_uri,omitempty"`
	IPAddresses     []shared.APIV2010AccountSipSipIPAccessControlListSipIPAddress `json:"ip_addresses,omitempty"`
	NextPageURI     *string                                                       `json:"next_page_uri,omitempty"`
	Page            *int64                                                        `json:"page,omitempty"`
	PageSize        *int64                                                        `json:"page_size,omitempty"`
	PreviousPageURI *string                                                       `json:"previous_page_uri,omitempty"`
	Start           *int64                                                        `json:"start,omitempty"`
	URI             *string                                                       `json:"uri,omitempty"`
}

type ListSipIPAddressResponse struct {
	ContentType string
	// OK
	ListSipIPAddressResponse *ListSipIPAddressListSipIPAddressResponse
	StatusCode               int
	RawResponse              *http.Response
}
