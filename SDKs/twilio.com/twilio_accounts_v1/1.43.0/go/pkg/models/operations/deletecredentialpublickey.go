// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

var DeleteCredentialPublicKeyServerList = []string{
	"https://accounts.twilio.com",
}

type DeleteCredentialPublicKeySecurity struct {
	Password string `security:"scheme,type=http,subtype=basic,name=password"`
	Username string `security:"scheme,type=http,subtype=basic,name=username"`
}

type DeleteCredentialPublicKeyRequest struct {
	// The Twilio-provided string that uniquely identifies the PublicKey resource to delete.
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteCredentialPublicKeyResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
