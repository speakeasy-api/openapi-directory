// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

var UpdateConfigurationServerList = []string{
	"https://conversations.twilio.com",
}

type UpdateConfigurationSecurity struct {
	Password string `security:"scheme,type=http,subtype=basic,name=password"`
	Username string `security:"scheme,type=http,subtype=basic,name=username"`
}

type UpdateConfigurationUpdateConfigurationRequest struct {
	// The SID of the default [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) to use when creating a conversation.
	DefaultChatServiceSid *string `form:"name=DefaultChatServiceSid"`
	// Default ISO8601 duration when conversation will be switched to `closed` state. Minimum value for this timer is 10 minutes.
	DefaultClosedTimer *string `form:"name=DefaultClosedTimer"`
	// Default ISO8601 duration when conversation will be switched to `inactive` state. Minimum value for this timer is 1 minute.
	DefaultInactiveTimer *string `form:"name=DefaultInactiveTimer"`
	// The SID of the default [Messaging Service](https://www.twilio.com/docs/sms/services/api) to use when creating a conversation.
	DefaultMessagingServiceSid *string `form:"name=DefaultMessagingServiceSid"`
}

type UpdateConfigurationResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// OK
	ConversationsV1Configuration *shared.ConversationsV1Configuration
}
