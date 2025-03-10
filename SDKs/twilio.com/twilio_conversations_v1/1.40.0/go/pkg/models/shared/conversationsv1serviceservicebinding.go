// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"time"
)

// ConversationsV1ServiceServiceBinding - OK
type ConversationsV1ServiceServiceBinding struct {
	// The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this binding.
	AccountSid  *string                            `json:"account_sid,omitempty"`
	BindingType *ServiceBindingEnumBindingTypeEnum `json:"binding_type,omitempty"`
	// The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) the Binding resource is associated with.
	ChatServiceSid *string `json:"chat_service_sid,omitempty"`
	// The SID of the [Credential](https://www.twilio.com/docs/conversations/api/credential-resource) for the binding. See [push notification configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for more info.
	CredentialSid *string `json:"credential_sid,omitempty"`
	// The date that this resource was created.
	DateCreated *time.Time `json:"date_created,omitempty"`
	// The date that this resource was last updated.
	DateUpdated *time.Time `json:"date_updated,omitempty"`
	// The unique endpoint identifier for the Binding. The format of this value depends on the `binding_type`.
	Endpoint *string `json:"endpoint,omitempty"`
	// The application-defined string that uniquely identifies the [Conversation User](https://www.twilio.com/docs/conversations/api/user-resource) within the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource). See [access tokens](https://www.twilio.com/docs/conversations/create-tokens) for more info.
	Identity *string `json:"identity,omitempty"`
	// The [Conversation message types](https://www.twilio.com/docs/chat/push-notification-configuration#push-types) the binding is subscribed to.
	MessageTypes []string `json:"message_types,omitempty"`
	// A 34 character string that uniquely identifies this resource.
	Sid *string `json:"sid,omitempty"`
	// An absolute API resource URL for this binding.
	URL *string `json:"url,omitempty"`
}
