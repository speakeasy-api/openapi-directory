// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

var DeleteConnectionPolicyServerList = []string{
	"https://voice.twilio.com",
}

type DeleteConnectionPolicySecurity struct {
	Password string `security:"scheme,type=http,subtype=basic,name=password"`
	Username string `security:"scheme,type=http,subtype=basic,name=username"`
}

type DeleteConnectionPolicyRequest struct {
	// The unique string that we created to identify the Connection Policy resource to delete.
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteConnectionPolicyResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
