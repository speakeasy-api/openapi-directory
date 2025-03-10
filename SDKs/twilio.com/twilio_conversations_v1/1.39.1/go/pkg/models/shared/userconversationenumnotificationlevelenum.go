// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type UserConversationEnumNotificationLevelEnum string

const (
	UserConversationEnumNotificationLevelEnumDefault UserConversationEnumNotificationLevelEnum = "default"
	UserConversationEnumNotificationLevelEnumMuted   UserConversationEnumNotificationLevelEnum = "muted"
)

func (e *UserConversationEnumNotificationLevelEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "default":
		fallthrough
	case "muted":
		*e = UserConversationEnumNotificationLevelEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for UserConversationEnumNotificationLevelEnum: %s", s)
	}
}
