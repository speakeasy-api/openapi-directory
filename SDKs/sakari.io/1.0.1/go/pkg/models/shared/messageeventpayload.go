package shared

type MessageEventPayload struct {
	Contact *ContactIdentifiers `json:"contact,omitempty"`
	Error   *string             `json:"error,omitempty"`
	Message *string             `json:"message,omitempty"`
	Status  *string             `json:"status,omitempty"`
}
