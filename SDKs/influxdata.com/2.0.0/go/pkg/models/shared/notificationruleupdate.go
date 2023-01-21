package shared

type NotificationRuleUpdateStatusEnum string

const (
	NotificationRuleUpdateStatusEnumActive   NotificationRuleUpdateStatusEnum = "active"
	NotificationRuleUpdateStatusEnumInactive NotificationRuleUpdateStatusEnum = "inactive"
)

type NotificationRuleUpdate struct {
	Description *string                           `json:"description,omitempty"`
	Name        *string                           `json:"name,omitempty"`
	Status      *NotificationRuleUpdateStatusEnum `json:"status,omitempty"`
}
