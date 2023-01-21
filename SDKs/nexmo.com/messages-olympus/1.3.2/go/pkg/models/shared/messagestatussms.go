package shared

type MessageStatusSmsChannelEnum string

const (
	MessageStatusSMSChannelEnumSms MessageStatusSmsChannelEnum = "sms"
)

// MessageStatusSmsError
// If the message encountered a problem a descriptive error will be supplied in this object.
type MessageStatusSmsError struct {
	Detail   *string `json:"detail,omitempty"`
	Instance *string `json:"instance,omitempty"`
	Title    *string `json:"title,omitempty"`
	Type     *string `json:"type,omitempty"`
}

type MessageStatusSmsStatusEnum string

const (
	MessageStatusSMSStatusEnumSubmitted     MessageStatusSmsStatusEnum = "submitted"
	MessageStatusSMSStatusEnumDelivered     MessageStatusSmsStatusEnum = "delivered"
	MessageStatusSMSStatusEnumRejected      MessageStatusSmsStatusEnum = "rejected"
	MessageStatusSMSStatusEnumUndeliverable MessageStatusSmsStatusEnum = "undeliverable"
)

type MessageStatusSmsUsageCurrencyEnum string

const (
	MessageStatusSMSUsageCurrencyEnumEur MessageStatusSmsUsageCurrencyEnum = "EUR"
)

type MessageStatusSmsUsage struct {
	Currency *MessageStatusSmsUsageCurrencyEnum `json:"currency,omitempty"`
	Price    *string                            `json:"price,omitempty"`
}

// MessageStatusSms
// SMS
type MessageStatusSms struct {
	Channel     MessageStatusSmsChannelEnum `json:"channel"`
	ClientRef   *string                     `json:"client_ref,omitempty"`
	Error       *MessageStatusSmsError      `json:"error,omitempty"`
	From        string                      `json:"from"`
	MessageUUID string                      `json:"message_uuid"`
	Status      MessageStatusSmsStatusEnum  `json:"status"`
	Timestamp   string                      `json:"timestamp"`
	To          string                      `json:"to"`
	Usage       *MessageStatusSmsUsage      `json:"usage,omitempty"`
}
