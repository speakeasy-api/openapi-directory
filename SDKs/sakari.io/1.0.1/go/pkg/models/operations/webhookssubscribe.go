// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

type WebhooksSubscribeSecurity struct {
	SakariAuth string `security:"scheme,type=oauth2,name=Authorization"`
}

type WebhooksSubscribeRequestBodyEventTypesEnum string

const (
	WebhooksSubscribeRequestBodyEventTypesEnumContactCreated      WebhooksSubscribeRequestBodyEventTypesEnum = "contact-created"
	WebhooksSubscribeRequestBodyEventTypesEnumContactUpdated      WebhooksSubscribeRequestBodyEventTypesEnum = "contact-updated"
	WebhooksSubscribeRequestBodyEventTypesEnumContactRemoved      WebhooksSubscribeRequestBodyEventTypesEnum = "contact-removed"
	WebhooksSubscribeRequestBodyEventTypesEnumMessageReceived     WebhooksSubscribeRequestBodyEventTypesEnum = "message-received"
	WebhooksSubscribeRequestBodyEventTypesEnumMessageSent         WebhooksSubscribeRequestBodyEventTypesEnum = "message-sent"
	WebhooksSubscribeRequestBodyEventTypesEnumMessageStatus       WebhooksSubscribeRequestBodyEventTypesEnum = "message-status"
	WebhooksSubscribeRequestBodyEventTypesEnumConversationStarted WebhooksSubscribeRequestBodyEventTypesEnum = "conversation-started"
	WebhooksSubscribeRequestBodyEventTypesEnumContactOptOut       WebhooksSubscribeRequestBodyEventTypesEnum = "contact-opt-out"
	WebhooksSubscribeRequestBodyEventTypesEnumContactOptIn        WebhooksSubscribeRequestBodyEventTypesEnum = "contact-opt-in"
	WebhooksSubscribeRequestBodyEventTypesEnumListOptOut          WebhooksSubscribeRequestBodyEventTypesEnum = "list-opt-out"
	WebhooksSubscribeRequestBodyEventTypesEnumListOptIn           WebhooksSubscribeRequestBodyEventTypesEnum = "list-opt-in"
)

func (e WebhooksSubscribeRequestBodyEventTypesEnum) ToPointer() *WebhooksSubscribeRequestBodyEventTypesEnum {
	return &e
}

func (e *WebhooksSubscribeRequestBodyEventTypesEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "contact-created":
		fallthrough
	case "contact-updated":
		fallthrough
	case "contact-removed":
		fallthrough
	case "message-received":
		fallthrough
	case "message-sent":
		fallthrough
	case "message-status":
		fallthrough
	case "conversation-started":
		fallthrough
	case "contact-opt-out":
		fallthrough
	case "contact-opt-in":
		fallthrough
	case "list-opt-out":
		fallthrough
	case "list-opt-in":
		*e = WebhooksSubscribeRequestBodyEventTypesEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for WebhooksSubscribeRequestBodyEventTypesEnum: %v", v)
	}
}

type WebhooksSubscribeRequestBody struct {
	EventTypes []WebhooksSubscribeRequestBodyEventTypesEnum `json:"eventTypes,omitempty"`
	URL        *string                                      `json:"url,omitempty"`
}

type WebhooksSubscribeRequest struct {
	RequestBody WebhooksSubscribeRequestBody `request:"mediaType=application/json"`
	// Account to apply operations to
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type WebhooksSubscribeResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// successful operation
	WebhookResponse *shared.WebhookResponse
}
