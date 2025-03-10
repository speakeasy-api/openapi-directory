// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
	"time"
)

var CreateMessageServerList = []string{
	"https://ip-messaging.twilio.com",
}

type CreateMessageSecurity struct {
	Password string `security:"scheme,type=http,subtype=basic,name=password"`
	Username string `security:"scheme,type=http,subtype=basic,name=username"`
}

type CreateMessageCreateMessageRequest struct {
	Attributes    *string    `form:"name=Attributes"`
	Body          *string    `form:"name=Body"`
	DateCreated   *time.Time `form:"name=DateCreated"`
	DateUpdated   *time.Time `form:"name=DateUpdated"`
	From          *string    `form:"name=From"`
	LastUpdatedBy *string    `form:"name=LastUpdatedBy"`
	MediaSid      *string    `form:"name=MediaSid"`
}

type CreateMessageRequest struct {
	ChannelSid  string                             `pathParam:"style=simple,explode=false,name=ChannelSid"`
	RequestBody *CreateMessageCreateMessageRequest `request:"mediaType=application/x-www-form-urlencoded"`
	ServiceSid  string                             `pathParam:"style=simple,explode=false,name=ServiceSid"`
	// The X-Twilio-Webhook-Enabled HTTP request header
	XTwilioWebhookEnabled *shared.MessageEnumWebhookEnabledTypeEnum `header:"style=simple,explode=false,name=X-Twilio-Webhook-Enabled"`
}

type CreateMessageResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Created
	IPMessagingV2ServiceChannelMessage *shared.IPMessagingV2ServiceChannelMessage
}
