// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

var ListFleetServerList = []string{
	"https://supersim.twilio.com",
}

type ListFleetSecurity struct {
	Password string `security:"scheme,type=http,subtype=basic,name=password"`
	Username string `security:"scheme,type=http,subtype=basic,name=username"`
}

type ListFleetRequest struct {
	// The SID or unique name of the Network Access Profile that controls which cellular networks the Fleet's SIMs can connect to.
	NetworkAccessProfile *string `queryParam:"style=form,explode=true,name=NetworkAccessProfile"`
	// The page index. This value is simply for client state.
	Page *int64 `queryParam:"style=form,explode=true,name=Page"`
	// How many resources to return in each list page. The default is 50, and the maximum is 1000.
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
	// The page token. This is provided by the API.
	PageToken *string `queryParam:"style=form,explode=true,name=PageToken"`
}

type ListFleetListFleetResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

// ListFleetListFleetResponse - OK
type ListFleetListFleetResponse struct {
	Fleets []shared.SupersimV1Fleet        `json:"fleets,omitempty"`
	Meta   *ListFleetListFleetResponseMeta `json:"meta,omitempty"`
}

type ListFleetResponse struct {
	ContentType string
	// OK
	ListFleetResponse *ListFleetListFleetResponse
	StatusCode        int
	RawResponse       *http.Response
}
