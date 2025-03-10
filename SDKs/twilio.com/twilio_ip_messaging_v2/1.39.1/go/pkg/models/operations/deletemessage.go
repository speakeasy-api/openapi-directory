// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

var DeleteMessageServerList = []string{
	"https://ip-messaging.twilio.com",
}

type DeleteMessageSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteMessagePathParams struct {
	ChannelSid string `pathParam:"style=simple,explode=false,name=ChannelSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteMessageHeaders struct {
	// The X-Twilio-Webhook-Enabled HTTP request header
	XTwilioWebhookEnabled *shared.MessageEnumWebhookEnabledTypeEnum `header:"style=simple,explode=false,name=X-Twilio-Webhook-Enabled"`
}

type DeleteMessageRequest struct {
	PathParams DeleteMessagePathParams
	Headers    DeleteMessageHeaders
	Security   DeleteMessageSecurity
	ServerURL  *string
}

type DeleteMessageResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
