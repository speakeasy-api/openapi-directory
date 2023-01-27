package shared

type MessageStatusMessengerChannelEnum string

const (
	MessageStatusMessengerChannelEnumMessenger MessageStatusMessengerChannelEnum = "messenger"
)

// MessageStatusMessengerError
// If the message encountered a problem a descriptive error will be supplied in this object.
type MessageStatusMessengerError struct {
	Detail   *string `json:"detail,omitempty"`
	Instance *string `json:"instance,omitempty"`
	Title    *string `json:"title,omitempty"`
	Type     *string `json:"type,omitempty"`
}

type MessageStatusMessengerUsageCurrencyEnum string

const (
	MessageStatusMessengerUsageCurrencyEnumEur MessageStatusMessengerUsageCurrencyEnum = "EUR"
)

type MessageStatusMessengerUsage struct {
	Currency *MessageStatusMessengerUsageCurrencyEnum `json:"currency,omitempty"`
	Price    *string                                  `json:"price,omitempty"`
}

// MessageStatusMessenger
// Messenger
type MessageStatusMessenger struct {
	Channel     MessageStatusMessengerChannelEnum `json:"channel"`
	ClientRef   *string                           `json:"client_ref,omitempty"`
	Error       *MessageStatusMessengerError      `json:"error,omitempty"`
	From        string                            `json:"from"`
	MessageUUID string                            `json:"message_uuid"`
	Status      interface{}                       `json:"status"`
	Timestamp   string                            `json:"timestamp"`
	To          string                            `json:"to"`
	Usage       *MessageStatusMessengerUsage      `json:"usage,omitempty"`
}
