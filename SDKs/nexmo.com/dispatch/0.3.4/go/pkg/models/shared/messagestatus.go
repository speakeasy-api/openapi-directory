package shared

type MessageStatusLinksWorkflow struct {
	DispatchUUID *string `json:"dispatch_uuid,omitempty"`
	Href         *string `json:"href,omitempty"`
}

type MessageStatusLinks struct {
	Workflow *MessageStatusLinksWorkflow `json:"workflow,omitempty"`
}

type MessageStatusError struct {
	Code   *int64  `json:"code,omitempty"`
	Reason *string `json:"reason,omitempty"`
}

type MessageStatusStatusEnum string

const (
	MessageStatusStatusEnumSubmitted     MessageStatusStatusEnum = "submitted"
	MessageStatusStatusEnumDelivered     MessageStatusStatusEnum = "delivered"
	MessageStatusStatusEnumRead          MessageStatusStatusEnum = "read"
	MessageStatusStatusEnumRejected      MessageStatusStatusEnum = "rejected"
	MessageStatusStatusEnumUndeliverable MessageStatusStatusEnum = "undeliverable"
)

type MessageStatusUsageCurrencyEnum string

const (
	MessageStatusUsageCurrencyEnumEur MessageStatusUsageCurrencyEnum = "EUR"
)

type MessageStatusUsage struct {
	Currency *MessageStatusUsageCurrencyEnum `json:"currency,omitempty"`
	Price    *string                         `json:"price,omitempty"`
}

// MessageStatus
// The callbacks for the message status are the same as defined in the Messaging API. The only difference will be that dispatch_uuid and link will be appended.
type MessageStatus struct {
	Links       *MessageStatusLinks      `json:"_links,omitempty"`
	Error       *MessageStatusError      `json:"error,omitempty"`
	From        *FromProperty            `json:"from,omitempty"`
	MessageUUID *string                  `json:"message_uuid,omitempty"`
	Status      *MessageStatusStatusEnum `json:"status,omitempty"`
	Timestamp   *string                  `json:"timestamp,omitempty"`
	To          *ToProperty              `json:"to,omitempty"`
	Usage       *MessageStatusUsage      `json:"usage,omitempty"`
}
