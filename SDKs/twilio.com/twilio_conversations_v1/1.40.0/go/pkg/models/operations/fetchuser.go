// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

var FetchUserServerList = []string{
	"https://conversations.twilio.com",
}

type FetchUserSecurity struct {
	Password string `security:"scheme,type=http,subtype=basic,name=password"`
	Username string `security:"scheme,type=http,subtype=basic,name=username"`
}

type FetchUserRequest struct {
	// The SID of the User resource to fetch. This value can be either the `sid` or the `identity` of the User resource to fetch.
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchUserResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// OK
	ConversationsV1User *shared.ConversationsV1User
}
