package shared

import (
	"time"
)

type Event struct {
	Content    map[string]interface{} `json:"content,omitempty"`
	EventType  *EventTypeEnum         `json:"event_type,omitempty"`
	ID         *string                `json:"id,omitempty"`
	ObjectType *EventObjectTypeEnum   `json:"object_type,omitempty"`
	OcurredAt  *time.Time             `json:"ocurred_at,omitempty"`
	Webhooks   []Webhook              `json:"webhooks,omitempty"`
}
