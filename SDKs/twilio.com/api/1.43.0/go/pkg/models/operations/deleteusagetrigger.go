// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

var DeleteUsageTriggerServerList = []string{
	"https://api.twilio.com",
}

type DeleteUsageTriggerSecurity struct {
	Password string `security:"scheme,type=http,subtype=basic,name=password"`
	Username string `security:"scheme,type=http,subtype=basic,name=username"`
}

type DeleteUsageTriggerRequest struct {
	// The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the UsageTrigger resources to delete.
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	// The Twilio-provided string that uniquely identifies the UsageTrigger resource to delete.
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteUsageTriggerResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
