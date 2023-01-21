package shared

type MessageStatusViberChannelEnum string

const (
	MessageStatusViberChannelEnumViberService MessageStatusViberChannelEnum = "viber_service"
)

// MessageStatusViberError
// If the message encountered a problem a descriptive error will be supplied in this object.
type MessageStatusViberError struct {
	Detail   *string `json:"detail,omitempty"`
	Instance *string `json:"instance,omitempty"`
	Title    *string `json:"title,omitempty"`
	Type     *string `json:"type,omitempty"`
}

type MessageStatusViberUsageCurrencyEnum string

const (
	MessageStatusViberUsageCurrencyEnumEur MessageStatusViberUsageCurrencyEnum = "EUR"
)

type MessageStatusViberUsage struct {
	Currency *MessageStatusViberUsageCurrencyEnum `json:"currency,omitempty"`
	Price    *string                              `json:"price,omitempty"`
}

// MessageStatusViber
// Viber
type MessageStatusViber struct {
	Channel     MessageStatusViberChannelEnum `json:"channel"`
	ClientRef   *string                       `json:"client_ref,omitempty"`
	Error       *MessageStatusViberError      `json:"error,omitempty"`
	From        string                        `json:"from"`
	MessageUUID string                        `json:"message_uuid"`
	Status      interface{}                   `json:"status"`
	Timestamp   string                        `json:"timestamp"`
	To          string                        `json:"to"`
	Usage       *MessageStatusViberUsage      `json:"usage,omitempty"`
}
