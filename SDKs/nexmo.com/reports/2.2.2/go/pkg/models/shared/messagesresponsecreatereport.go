package shared

// MessagesResponseCreateReport
// Messages
type MessagesResponseCreateReport struct {
	Direction      DirectionEnum       `json:"direction"`
	From           *string             `json:"from,omitempty"`
	ID             *string             `json:"id,omitempty"`
	IncludeMessage *bool               `json:"include_message,omitempty"`
	Product        ProductMessagesEnum `json:"product"`
	To             *string             `json:"to,omitempty"`
}
