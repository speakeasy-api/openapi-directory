package operations

import (
	"openapi/pkg/models/shared"
)

var CreateConversationScopedWebhookServerList = []string{
	"https://conversations.twilio.com",
}

type CreateConversationScopedWebhookPathParams struct {
	ConversationSid string `pathParam:"style=simple,explode=false,name=ConversationSid"`
}

type CreateConversationScopedWebhookCreateConversationScopedWebhookRequest struct {
	ConfigurationFilters     []string                                        `form:"name=Configuration.Filters"`
	ConfigurationFlowSid     *string                                         `form:"name=Configuration.FlowSid"`
	ConfigurationMethod      *shared.ConversationScopedWebhookEnumMethodEnum `form:"name=Configuration.Method"`
	ConfigurationReplayAfter *int64                                          `form:"name=Configuration.ReplayAfter"`
	ConfigurationTriggers    []string                                        `form:"name=Configuration.Triggers"`
	ConfigurationURL         *string                                         `form:"name=Configuration.Url"`
	Target                   shared.ConversationScopedWebhookEnumTargetEnum  `form:"name=Target"`
}

type CreateConversationScopedWebhookSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateConversationScopedWebhookRequest struct {
	ServerURL  *string
	PathParams CreateConversationScopedWebhookPathParams
	Request    *CreateConversationScopedWebhookCreateConversationScopedWebhookRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateConversationScopedWebhookSecurity
}

type CreateConversationScopedWebhookResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	ConversationsV1ConversationConversationScopedWebhook *shared.ConversationsV1ConversationConversationScopedWebhook
}
