// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

var ListBindingServerList = []string{
	"https://chat.twilio.com",
}

type ListBindingSecurity struct {
	Password string `security:"scheme,type=http,subtype=basic,name=password"`
	Username string `security:"scheme,type=http,subtype=basic,name=username"`
}

type ListBindingRequest struct {
	// The push technology used by the Binding resources to read.  Can be: `apn`, `gcm`, or `fcm`.  See [push notification configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for more info.
	BindingType []shared.BindingEnumBindingTypeEnum `queryParam:"style=form,explode=true,name=BindingType"`
	// The [User](https://www.twilio.com/docs/chat/rest/user-resource)'s `identity` value of the resources to read. See [access tokens](https://www.twilio.com/docs/chat/create-tokens) for more details.
	Identity []string `queryParam:"style=form,explode=true,name=Identity"`
	// The page index. This value is simply for client state.
	Page *int64 `queryParam:"style=form,explode=true,name=Page"`
	// How many resources to return in each list page. The default is 50, and the maximum is 1000.
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
	// The page token. This is provided by the API.
	PageToken *string `queryParam:"style=form,explode=true,name=PageToken"`
	// The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to read the Binding resources from.
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListBindingListBindingResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

// ListBindingListBindingResponse - OK
type ListBindingListBindingResponse struct {
	Bindings []shared.ChatV2ServiceBinding       `json:"bindings,omitempty"`
	Meta     *ListBindingListBindingResponseMeta `json:"meta,omitempty"`
}

type ListBindingResponse struct {
	ContentType string
	// OK
	ListBindingResponse *ListBindingListBindingResponse
	StatusCode          int
	RawResponse         *http.Response
}
