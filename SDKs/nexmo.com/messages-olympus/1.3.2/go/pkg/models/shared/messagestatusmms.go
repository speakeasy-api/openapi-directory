package shared

type MessageStatusMmsChannelEnum string

const (
	MessageStatusMMSChannelEnumMms MessageStatusMmsChannelEnum = "mms"
)

// MessageStatusMmsError
// If the message encountered a problem a descriptive error will be supplied in this object.
type MessageStatusMmsError struct {
	Detail   *string `json:"detail,omitempty"`
	Instance *string `json:"instance,omitempty"`
	Title    *string `json:"title,omitempty"`
	Type     *string `json:"type,omitempty"`
}

type MessageStatusMmsStatusEnum string

const (
	MessageStatusMMSStatusEnumSubmitted     MessageStatusMmsStatusEnum = "submitted"
	MessageStatusMMSStatusEnumDelivered     MessageStatusMmsStatusEnum = "delivered"
	MessageStatusMMSStatusEnumRejected      MessageStatusMmsStatusEnum = "rejected"
	MessageStatusMMSStatusEnumUndeliverable MessageStatusMmsStatusEnum = "undeliverable"
)

type MessageStatusMmsUsageCurrencyEnum string

const (
	MessageStatusMMSUsageCurrencyEnumEur MessageStatusMmsUsageCurrencyEnum = "EUR"
)

type MessageStatusMmsUsage struct {
	Currency *MessageStatusMmsUsageCurrencyEnum `json:"currency,omitempty"`
	Price    *string                            `json:"price,omitempty"`
}

// MessageStatusMms
// MMS
type MessageStatusMms struct {
	Channel     MessageStatusMmsChannelEnum `json:"channel"`
	ClientRef   *string                     `json:"client_ref,omitempty"`
	Error       *MessageStatusMmsError      `json:"error,omitempty"`
	From        string                      `json:"from"`
	MessageUUID string                      `json:"message_uuid"`
	Status      MessageStatusMmsStatusEnum  `json:"status"`
	Timestamp   string                      `json:"timestamp"`
	To          string                      `json:"to"`
	Usage       *MessageStatusMmsUsage      `json:"usage,omitempty"`
}
