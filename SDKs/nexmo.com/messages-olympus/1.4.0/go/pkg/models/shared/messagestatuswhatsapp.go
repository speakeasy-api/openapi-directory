package shared

type MessageStatusWhatsAppChannelEnum string

const (
	MessageStatusWhatsAppChannelEnumWhatsapp MessageStatusWhatsAppChannelEnum = "whatsapp"
)

// MessageStatusWhatsAppError
// If the message encountered a problem a descriptive error will be supplied in this object.
type MessageStatusWhatsAppError struct {
	Detail   *string `json:"detail,omitempty"`
	Instance *string `json:"instance,omitempty"`
	Title    *string `json:"title,omitempty"`
	Type     *string `json:"type,omitempty"`
}

type MessageStatusWhatsAppUsageCurrencyEnum string

const (
	MessageStatusWhatsAppUsageCurrencyEnumEur MessageStatusWhatsAppUsageCurrencyEnum = "EUR"
)

type MessageStatusWhatsAppUsage struct {
	Currency *MessageStatusWhatsAppUsageCurrencyEnum `json:"currency,omitempty"`
	Price    *string                                 `json:"price,omitempty"`
}

// MessageStatusWhatsAppWhatsappConversationOrigin
// An object contining data related to the origin of the conversation.
type MessageStatusWhatsAppWhatsappConversationOrigin struct {
	Type *string `json:"type,omitempty"`
}

// MessageStatusWhatsAppWhatsappConversation
// An object contining data for the conversation to which the message relates.
type MessageStatusWhatsAppWhatsappConversation struct {
	ID     *string                                          `json:"id,omitempty"`
	Origin *MessageStatusWhatsAppWhatsappConversationOrigin `json:"origin,omitempty"`
}

// MessageStatusWhatsAppWhatsapp
// An object contining meta-data related to the WhatsApp message that triggered this callback. Only present for callbacks with a `status` of `delivered`.
type MessageStatusWhatsAppWhatsapp struct {
	Conversation *MessageStatusWhatsAppWhatsappConversation `json:"conversation,omitempty"`
}

// MessageStatusWhatsApp
// WhatsApp
type MessageStatusWhatsApp struct {
	Channel     MessageStatusWhatsAppChannelEnum `json:"channel"`
	ClientRef   *string                          `json:"client_ref,omitempty"`
	Error       *MessageStatusWhatsAppError      `json:"error,omitempty"`
	From        string                           `json:"from"`
	MessageUUID string                           `json:"message_uuid"`
	Status      interface{}                      `json:"status"`
	Timestamp   string                           `json:"timestamp"`
	To          string                           `json:"to"`
	Usage       *MessageStatusWhatsAppUsage      `json:"usage,omitempty"`
	Whatsapp    *MessageStatusWhatsAppWhatsapp   `json:"whatsapp,omitempty"`
}
