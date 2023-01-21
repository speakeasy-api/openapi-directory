package shared

type NotificationEndpointUpdateStatusEnum string

const (
	NotificationEndpointUpdateStatusEnumActive   NotificationEndpointUpdateStatusEnum = "active"
	NotificationEndpointUpdateStatusEnumInactive NotificationEndpointUpdateStatusEnum = "inactive"
)

type NotificationEndpointUpdate struct {
	Description *string                               `json:"description,omitempty"`
	Name        *string                               `json:"name,omitempty"`
	Status      *NotificationEndpointUpdateStatusEnum `json:"status,omitempty"`
}
