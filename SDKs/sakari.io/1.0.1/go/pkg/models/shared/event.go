package shared

type Event struct {
	AccountID *string        `json:"accountId,omitempty"`
	Data      *interface{}   `json:"data,omitempty"`
	EventID   *string        `json:"eventId,omitempty"`
	Type      *EventTypeEnum `json:"type,omitempty"`
}
