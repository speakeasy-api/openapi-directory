// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type ConversationScopedWebhookEnumTargetEnum string

const (
	ConversationScopedWebhookEnumTargetEnumWebhook ConversationScopedWebhookEnumTargetEnum = "webhook"
	ConversationScopedWebhookEnumTargetEnumTrigger ConversationScopedWebhookEnumTargetEnum = "trigger"
	ConversationScopedWebhookEnumTargetEnumStudio  ConversationScopedWebhookEnumTargetEnum = "studio"
)

func (e *ConversationScopedWebhookEnumTargetEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "webhook":
		fallthrough
	case "trigger":
		fallthrough
	case "studio":
		*e = ConversationScopedWebhookEnumTargetEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for ConversationScopedWebhookEnumTargetEnum: %s", s)
	}
}
