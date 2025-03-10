// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

var FetchMediaServerList = []string{
	"https://api.twilio.com",
}

type FetchMediaSecurity struct {
	Password string `security:"scheme,type=http,subtype=basic,name=password"`
	Username string `security:"scheme,type=http,subtype=basic,name=username"`
}

type FetchMediaRequest struct {
	// The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Media resource(s) to fetch.
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	// The SID of the Message resource that this Media resource belongs to.
	MessageSid string `pathParam:"style=simple,explode=false,name=MessageSid"`
	// The Twilio-provided string that uniquely identifies the Media resource to fetch
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchMediaResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// OK
	APIV2010AccountMessageMedia *shared.APIV2010AccountMessageMedia
}
