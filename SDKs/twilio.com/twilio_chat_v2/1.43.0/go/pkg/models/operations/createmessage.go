// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
	"time"
)

var CreateMessageServerList = []string{
	"https://chat.twilio.com",
}

type CreateMessageSecurity struct {
	Password string `security:"scheme,type=http,subtype=basic,name=password"`
	Username string `security:"scheme,type=http,subtype=basic,name=username"`
}

type CreateMessageCreateMessageRequest struct {
	// A valid JSON string that contains application-specific data.
	Attributes *string `form:"name=Attributes"`
	// The message to send to the channel. Can be an empty string or `null`, which sets the value as an empty string. You can send structured data in the body by serializing it as a string.
	Body *string `form:"name=Body"`
	// The date, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format, to assign to the resource as the date it was created. The default value is the current time set by the Chat service. This parameter should only be used when a Chat's history is being recreated from a backup/separate source.
	DateCreated *time.Time `form:"name=DateCreated"`
	// The date, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format, to assign to the resource as the date it was last updated.
	DateUpdated *time.Time `form:"name=DateUpdated"`
	// The [Identity](https://www.twilio.com/docs/chat/identity) of the new message's author. The default value is `system`.
	From *string `form:"name=From"`
	// The [Identity](https://www.twilio.com/docs/chat/identity) of the User who last updated the Message, if applicable.
	LastUpdatedBy *string `form:"name=LastUpdatedBy"`
	// The SID of the [Media](https://www.twilio.com/docs/chat/rest/media) to attach to the new Message.
	MediaSid *string `form:"name=MediaSid"`
}

type CreateMessageRequest struct {
	// The SID of the [Channel](https://www.twilio.com/docs/chat/channels) the new Message resource belongs to. This value can be the Channel resource's `sid` or `unique_name`.
	ChannelSid  string                             `pathParam:"style=simple,explode=false,name=ChannelSid"`
	RequestBody *CreateMessageCreateMessageRequest `request:"mediaType=application/x-www-form-urlencoded"`
	// The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to create the Message resource under.
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	// The X-Twilio-Webhook-Enabled HTTP request header
	XTwilioWebhookEnabled *shared.MessageEnumWebhookEnabledTypeEnum `header:"style=simple,explode=false,name=X-Twilio-Webhook-Enabled"`
}

type CreateMessageResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Created
	ChatV2ServiceChannelMessage *shared.ChatV2ServiceChannelMessage
}
