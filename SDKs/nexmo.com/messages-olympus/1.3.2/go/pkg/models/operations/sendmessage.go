package operations

import (
	"openapi/pkg/models/shared"
)

type SendMessageRequestBody1TextChannelEnum string

const (
	SendMessageRequestBody1TextChannelEnumSms SendMessageRequestBody1TextChannelEnum = "sms"
)

type SendMessageRequestBody1TextMessageTypeEnum string

const (
	SendMessageRequestBody1TextMessageTypeEnumText SendMessageRequestBody1TextMessageTypeEnum = "text"
)

// SendMessageRequestBody1Text
// The text of message to send.
type SendMessageRequestBody1Text struct {
	Channel     SendMessageRequestBody1TextChannelEnum     `json:"channel"`
	ClientRef   *string                                    `json:"client_ref,omitempty"`
	From        string                                     `json:"from"`
	MessageType SendMessageRequestBody1TextMessageTypeEnum `json:"message_type"`
	Text        interface{}                                `json:"text"`
	To          string                                     `json:"to"`
}

type SendMessageRequestBody2ImageChannelEnum string

const (
	SendMessageRequestBody2ImageChannelEnumMms SendMessageRequestBody2ImageChannelEnum = "mms"
)

type SendMessageRequestBody2ImageMessageTypeEnum string

const (
	SendMessageRequestBody2ImageMessageTypeEnumImage SendMessageRequestBody2ImageMessageTypeEnum = "image"
)

type SendMessageRequestBody2Image struct {
	Channel     SendMessageRequestBody2ImageChannelEnum     `json:"channel"`
	ClientRef   *string                                     `json:"client_ref,omitempty"`
	From        string                                      `json:"from"`
	Image       interface{}                                 `json:"image"`
	MessageType SendMessageRequestBody2ImageMessageTypeEnum `json:"message_type"`
	To          string                                      `json:"to"`
}

type SendMessageRequestBody2VCardChannelEnum string

const (
	SendMessageRequestBody2VCardChannelEnumMms SendMessageRequestBody2VCardChannelEnum = "mms"
)

type SendMessageRequestBody2VCardMessageTypeEnum string

const (
	SendMessageRequestBody2VCardMessageTypeEnumVcard SendMessageRequestBody2VCardMessageTypeEnum = "vcard"
)

type SendMessageRequestBody2VCard struct {
	Channel     SendMessageRequestBody2VCardChannelEnum     `json:"channel"`
	ClientRef   *string                                     `json:"client_ref,omitempty"`
	From        string                                      `json:"from"`
	MessageType SendMessageRequestBody2VCardMessageTypeEnum `json:"message_type"`
	To          string                                      `json:"to"`
	Vcard       interface{}                                 `json:"vcard"`
}

type SendMessageRequestBody2AudioChannelEnum string

const (
	SendMessageRequestBody2AudioChannelEnumMms SendMessageRequestBody2AudioChannelEnum = "mms"
)

type SendMessageRequestBody2AudioMessageTypeEnum string

const (
	SendMessageRequestBody2AudioMessageTypeEnumAudio SendMessageRequestBody2AudioMessageTypeEnum = "audio"
)

type SendMessageRequestBody2Audio struct {
	Audio       interface{}                                 `json:"audio"`
	Channel     SendMessageRequestBody2AudioChannelEnum     `json:"channel"`
	ClientRef   *string                                     `json:"client_ref,omitempty"`
	From        string                                      `json:"from"`
	MessageType SendMessageRequestBody2AudioMessageTypeEnum `json:"message_type"`
	To          string                                      `json:"to"`
}

type SendMessageRequestBody2VideoChannelEnum string

const (
	SendMessageRequestBody2VideoChannelEnumMms SendMessageRequestBody2VideoChannelEnum = "mms"
)

type SendMessageRequestBody2VideoMessageTypeEnum string

const (
	SendMessageRequestBody2VideoMessageTypeEnumVideo SendMessageRequestBody2VideoMessageTypeEnum = "video"
)

type SendMessageRequestBody2Video struct {
	Channel     SendMessageRequestBody2VideoChannelEnum     `json:"channel"`
	ClientRef   *string                                     `json:"client_ref,omitempty"`
	From        string                                      `json:"from"`
	MessageType SendMessageRequestBody2VideoMessageTypeEnum `json:"message_type"`
	To          string                                      `json:"to"`
	Video       interface{}                                 `json:"video"`
}

type SendMessageRequestBody3TextChannelEnum string

const (
	SendMessageRequestBody3TextChannelEnumWhatsapp SendMessageRequestBody3TextChannelEnum = "whatsapp"
)

type SendMessageRequestBody3TextMessageTypeEnum string

const (
	SendMessageRequestBody3TextMessageTypeEnumText SendMessageRequestBody3TextMessageTypeEnum = "text"
)

// SendMessageRequestBody3Text
// The text of message to send.
type SendMessageRequestBody3Text struct {
	Channel     SendMessageRequestBody3TextChannelEnum     `json:"channel"`
	ClientRef   *string                                    `json:"client_ref,omitempty"`
	From        string                                     `json:"from"`
	MessageType SendMessageRequestBody3TextMessageTypeEnum `json:"message_type"`
	Text        interface{}                                `json:"text"`
	To          string                                     `json:"to"`
}

type SendMessageRequestBody3LocationChannelEnum string

const (
	SendMessageRequestBody3LocationChannelEnumWhatsapp SendMessageRequestBody3LocationChannelEnum = "whatsapp"
)

type SendMessageRequestBody3LocationLocation struct {
	Address *string `json:"address,omitempty"`
	Lat     float64 `json:"lat"`
	Long    float64 `json:"long"`
	Name    *string `json:"name,omitempty"`
}

type SendMessageRequestBody3LocationMessageTypeEnum string

const (
	SendMessageRequestBody3LocationMessageTypeEnumLocation SendMessageRequestBody3LocationMessageTypeEnum = "location"
)

type SendMessageRequestBody3Location struct {
	Channel     SendMessageRequestBody3LocationChannelEnum     `json:"channel"`
	ClientRef   *string                                        `json:"client_ref,omitempty"`
	From        string                                         `json:"from"`
	Location    SendMessageRequestBody3LocationLocation        `json:"location"`
	MessageType SendMessageRequestBody3LocationMessageTypeEnum `json:"message_type"`
	Text        *interface{}                                   `json:"text,omitempty"`
	To          string                                         `json:"to"`
}

type SendMessageRequestBody3ImageChannelEnum string

const (
	SendMessageRequestBody3ImageChannelEnumWhatsapp SendMessageRequestBody3ImageChannelEnum = "whatsapp"
)

type SendMessageRequestBody3ImageMessageTypeEnum string

const (
	SendMessageRequestBody3ImageMessageTypeEnumImage SendMessageRequestBody3ImageMessageTypeEnum = "image"
)

type SendMessageRequestBody3Image struct {
	Channel     SendMessageRequestBody3ImageChannelEnum     `json:"channel"`
	ClientRef   *string                                     `json:"client_ref,omitempty"`
	From        string                                      `json:"from"`
	Image       interface{}                                 `json:"image"`
	MessageType SendMessageRequestBody3ImageMessageTypeEnum `json:"message_type"`
	To          string                                      `json:"to"`
}

type SendMessageRequestBody3AudioChannelEnum string

const (
	SendMessageRequestBody3AudioChannelEnumWhatsapp SendMessageRequestBody3AudioChannelEnum = "whatsapp"
)

type SendMessageRequestBody3AudioMessageTypeEnum string

const (
	SendMessageRequestBody3AudioMessageTypeEnumAudio SendMessageRequestBody3AudioMessageTypeEnum = "audio"
)

type SendMessageRequestBody3Audio struct {
	Audio       interface{}                                 `json:"audio"`
	Channel     SendMessageRequestBody3AudioChannelEnum     `json:"channel"`
	ClientRef   *string                                     `json:"client_ref,omitempty"`
	From        string                                      `json:"from"`
	MessageType SendMessageRequestBody3AudioMessageTypeEnum `json:"message_type"`
	To          string                                      `json:"to"`
}

type SendMessageRequestBody3VideoChannelEnum string

const (
	SendMessageRequestBody3VideoChannelEnumWhatsapp SendMessageRequestBody3VideoChannelEnum = "whatsapp"
)

type SendMessageRequestBody3VideoMessageTypeEnum string

const (
	SendMessageRequestBody3VideoMessageTypeEnumVideo SendMessageRequestBody3VideoMessageTypeEnum = "video"
)

type SendMessageRequestBody3Video struct {
	Channel     SendMessageRequestBody3VideoChannelEnum     `json:"channel"`
	ClientRef   *string                                     `json:"client_ref,omitempty"`
	From        string                                      `json:"from"`
	MessageType SendMessageRequestBody3VideoMessageTypeEnum `json:"message_type"`
	To          string                                      `json:"to"`
	Video       interface{}                                 `json:"video"`
}

type SendMessageRequestBody3FileChannelEnum string

const (
	SendMessageRequestBody3FileChannelEnumWhatsapp SendMessageRequestBody3FileChannelEnum = "whatsapp"
)

type SendMessageRequestBody3FileMessageTypeEnum string

const (
	SendMessageRequestBody3FileMessageTypeEnumFile SendMessageRequestBody3FileMessageTypeEnum = "file"
)

type SendMessageRequestBody3File struct {
	Channel     SendMessageRequestBody3FileChannelEnum     `json:"channel"`
	ClientRef   *string                                    `json:"client_ref,omitempty"`
	File        interface{}                                `json:"file"`
	From        string                                     `json:"from"`
	MessageType SendMessageRequestBody3FileMessageTypeEnum `json:"message_type"`
	To          string                                     `json:"to"`
}

type SendMessageRequestBody3TemplateChannelEnum string

const (
	SendMessageRequestBody3TemplateChannelEnumWhatsapp SendMessageRequestBody3TemplateChannelEnum = "whatsapp"
)

type SendMessageRequestBody3TemplateMessageTypeEnum string

const (
	SendMessageRequestBody3TemplateMessageTypeEnumTemplate SendMessageRequestBody3TemplateMessageTypeEnum = "template"
)

type SendMessageRequestBody3TemplateTemplate struct {
	Name       string   `json:"name"`
	Parameters []string `json:"parameters,omitempty"`
}

type SendMessageRequestBody3TemplateWhatsappPolicyEnum string

const (
	SendMessageRequestBody3TemplateWhatsappPolicyEnumDeterministic SendMessageRequestBody3TemplateWhatsappPolicyEnum = "deterministic"
)

type SendMessageRequestBody3TemplateWhatsapp struct {
	Locale string                                             `json:"locale"`
	Policy *SendMessageRequestBody3TemplateWhatsappPolicyEnum `json:"policy,omitempty"`
}

type SendMessageRequestBody3Template struct {
	Channel     SendMessageRequestBody3TemplateChannelEnum     `json:"channel"`
	ClientRef   *string                                        `json:"client_ref,omitempty"`
	From        string                                         `json:"from"`
	MessageType SendMessageRequestBody3TemplateMessageTypeEnum `json:"message_type"`
	Template    SendMessageRequestBody3TemplateTemplate        `json:"template"`
	To          string                                         `json:"to"`
	Whatsapp    SendMessageRequestBody3TemplateWhatsapp        `json:"whatsapp"`
}

type SendMessageRequestBody3CustomChannelEnum string

const (
	SendMessageRequestBody3CustomChannelEnumWhatsapp SendMessageRequestBody3CustomChannelEnum = "whatsapp"
)

type SendMessageRequestBody3CustomMessageTypeEnum string

const (
	SendMessageRequestBody3CustomMessageTypeEnumCustom SendMessageRequestBody3CustomMessageTypeEnum = "custom"
)

type SendMessageRequestBody3Custom struct {
	Channel     SendMessageRequestBody3CustomChannelEnum     `json:"channel"`
	ClientRef   *string                                      `json:"client_ref,omitempty"`
	Custom      map[string]interface{}                       `json:"custom,omitempty"`
	From        string                                       `json:"from"`
	MessageType SendMessageRequestBody3CustomMessageTypeEnum `json:"message_type"`
	To          string                                       `json:"to"`
}

type SendMessageRequestBody4TextChannelEnum string

const (
	SendMessageRequestBody4TextChannelEnumMessenger SendMessageRequestBody4TextChannelEnum = "messenger"
)

type SendMessageRequestBody4TextMessageTypeEnum string

const (
	SendMessageRequestBody4TextMessageTypeEnumText SendMessageRequestBody4TextMessageTypeEnum = "text"
)

type SendMessageRequestBody4TextMessengerCategoryEnum string

const (
	SendMessageRequestBody4TextMessengerCategoryEnumResponse   SendMessageRequestBody4TextMessengerCategoryEnum = "response"
	SendMessageRequestBody4TextMessengerCategoryEnumUpdate     SendMessageRequestBody4TextMessengerCategoryEnum = "update"
	SendMessageRequestBody4TextMessengerCategoryEnumMessageTag SendMessageRequestBody4TextMessengerCategoryEnum = "message_tag"
)

type SendMessageRequestBody4TextMessenger struct {
	Category *SendMessageRequestBody4TextMessengerCategoryEnum `json:"category,omitempty"`
	Tag      *string                                           `json:"tag,omitempty"`
}

// SendMessageRequestBody4Text
// The text of message to send.
type SendMessageRequestBody4Text struct {
	Channel     SendMessageRequestBody4TextChannelEnum     `json:"channel"`
	ClientRef   *string                                    `json:"client_ref,omitempty"`
	From        string                                     `json:"from"`
	MessageType SendMessageRequestBody4TextMessageTypeEnum `json:"message_type"`
	Messenger   *SendMessageRequestBody4TextMessenger      `json:"messenger,omitempty"`
	Text        interface{}                                `json:"text"`
	To          string                                     `json:"to"`
}

type SendMessageRequestBody4ImageChannelEnum string

const (
	SendMessageRequestBody4ImageChannelEnumMessenger SendMessageRequestBody4ImageChannelEnum = "messenger"
)

type SendMessageRequestBody4ImageMessageTypeEnum string

const (
	SendMessageRequestBody4ImageMessageTypeEnumImage SendMessageRequestBody4ImageMessageTypeEnum = "image"
)

type SendMessageRequestBody4ImageMessengerCategoryEnum string

const (
	SendMessageRequestBody4ImageMessengerCategoryEnumResponse   SendMessageRequestBody4ImageMessengerCategoryEnum = "response"
	SendMessageRequestBody4ImageMessengerCategoryEnumUpdate     SendMessageRequestBody4ImageMessengerCategoryEnum = "update"
	SendMessageRequestBody4ImageMessengerCategoryEnumMessageTag SendMessageRequestBody4ImageMessengerCategoryEnum = "message_tag"
)

type SendMessageRequestBody4ImageMessenger struct {
	Category *SendMessageRequestBody4ImageMessengerCategoryEnum `json:"category,omitempty"`
	Tag      *string                                            `json:"tag,omitempty"`
}

type SendMessageRequestBody4Image struct {
	Channel     SendMessageRequestBody4ImageChannelEnum     `json:"channel"`
	ClientRef   *string                                     `json:"client_ref,omitempty"`
	From        string                                      `json:"from"`
	Image       interface{}                                 `json:"image"`
	MessageType SendMessageRequestBody4ImageMessageTypeEnum `json:"message_type"`
	Messenger   *SendMessageRequestBody4ImageMessenger      `json:"messenger,omitempty"`
	To          string                                      `json:"to"`
}

type SendMessageRequestBody4AudioChannelEnum string

const (
	SendMessageRequestBody4AudioChannelEnumMessenger SendMessageRequestBody4AudioChannelEnum = "messenger"
)

type SendMessageRequestBody4AudioMessageTypeEnum string

const (
	SendMessageRequestBody4AudioMessageTypeEnumAudio SendMessageRequestBody4AudioMessageTypeEnum = "audio"
)

type SendMessageRequestBody4AudioMessengerCategoryEnum string

const (
	SendMessageRequestBody4AudioMessengerCategoryEnumResponse   SendMessageRequestBody4AudioMessengerCategoryEnum = "response"
	SendMessageRequestBody4AudioMessengerCategoryEnumUpdate     SendMessageRequestBody4AudioMessengerCategoryEnum = "update"
	SendMessageRequestBody4AudioMessengerCategoryEnumMessageTag SendMessageRequestBody4AudioMessengerCategoryEnum = "message_tag"
)

type SendMessageRequestBody4AudioMessenger struct {
	Category *SendMessageRequestBody4AudioMessengerCategoryEnum `json:"category,omitempty"`
	Tag      *string                                            `json:"tag,omitempty"`
}

type SendMessageRequestBody4Audio struct {
	Audio       interface{}                                 `json:"audio"`
	Channel     SendMessageRequestBody4AudioChannelEnum     `json:"channel"`
	ClientRef   *string                                     `json:"client_ref,omitempty"`
	From        string                                      `json:"from"`
	MessageType SendMessageRequestBody4AudioMessageTypeEnum `json:"message_type"`
	Messenger   *SendMessageRequestBody4AudioMessenger      `json:"messenger,omitempty"`
	To          string                                      `json:"to"`
}

type SendMessageRequestBody4VideoChannelEnum string

const (
	SendMessageRequestBody4VideoChannelEnumMessenger SendMessageRequestBody4VideoChannelEnum = "messenger"
)

type SendMessageRequestBody4VideoMessageTypeEnum string

const (
	SendMessageRequestBody4VideoMessageTypeEnumVideo SendMessageRequestBody4VideoMessageTypeEnum = "video"
)

type SendMessageRequestBody4VideoMessengerCategoryEnum string

const (
	SendMessageRequestBody4VideoMessengerCategoryEnumResponse   SendMessageRequestBody4VideoMessengerCategoryEnum = "response"
	SendMessageRequestBody4VideoMessengerCategoryEnumUpdate     SendMessageRequestBody4VideoMessengerCategoryEnum = "update"
	SendMessageRequestBody4VideoMessengerCategoryEnumMessageTag SendMessageRequestBody4VideoMessengerCategoryEnum = "message_tag"
)

type SendMessageRequestBody4VideoMessenger struct {
	Category *SendMessageRequestBody4VideoMessengerCategoryEnum `json:"category,omitempty"`
	Tag      *string                                            `json:"tag,omitempty"`
}

type SendMessageRequestBody4Video struct {
	Channel     SendMessageRequestBody4VideoChannelEnum     `json:"channel"`
	ClientRef   *string                                     `json:"client_ref,omitempty"`
	From        string                                      `json:"from"`
	MessageType SendMessageRequestBody4VideoMessageTypeEnum `json:"message_type"`
	Messenger   *SendMessageRequestBody4VideoMessenger      `json:"messenger,omitempty"`
	To          string                                      `json:"to"`
	Video       interface{}                                 `json:"video"`
}

type SendMessageRequestBody4FileChannelEnum string

const (
	SendMessageRequestBody4FileChannelEnumMessenger SendMessageRequestBody4FileChannelEnum = "messenger"
)

type SendMessageRequestBody4FileMessageTypeEnum string

const (
	SendMessageRequestBody4FileMessageTypeEnumFile SendMessageRequestBody4FileMessageTypeEnum = "file"
)

type SendMessageRequestBody4FileMessengerCategoryEnum string

const (
	SendMessageRequestBody4FileMessengerCategoryEnumResponse   SendMessageRequestBody4FileMessengerCategoryEnum = "response"
	SendMessageRequestBody4FileMessengerCategoryEnumUpdate     SendMessageRequestBody4FileMessengerCategoryEnum = "update"
	SendMessageRequestBody4FileMessengerCategoryEnumMessageTag SendMessageRequestBody4FileMessengerCategoryEnum = "message_tag"
)

type SendMessageRequestBody4FileMessenger struct {
	Category *SendMessageRequestBody4FileMessengerCategoryEnum `json:"category,omitempty"`
	Tag      *string                                           `json:"tag,omitempty"`
}

type SendMessageRequestBody4File struct {
	Channel     SendMessageRequestBody4FileChannelEnum     `json:"channel"`
	ClientRef   *string                                    `json:"client_ref,omitempty"`
	File        interface{}                                `json:"file"`
	From        string                                     `json:"from"`
	MessageType SendMessageRequestBody4FileMessageTypeEnum `json:"message_type"`
	Messenger   *SendMessageRequestBody4FileMessenger      `json:"messenger,omitempty"`
	To          string                                     `json:"to"`
}

type SendMessageRequestBody5TextChannelEnum string

const (
	SendMessageRequestBody5TextChannelEnumViberService SendMessageRequestBody5TextChannelEnum = "viber_service"
)

type SendMessageRequestBody5TextMessageTypeEnum string

const (
	SendMessageRequestBody5TextMessageTypeEnumText SendMessageRequestBody5TextMessageTypeEnum = "text"
)

type SendMessageRequestBody5TextViberServiceCategoryEnum string

const (
	SendMessageRequestBody5TextViberServiceCategoryEnumTransaction SendMessageRequestBody5TextViberServiceCategoryEnum = "transaction"
	SendMessageRequestBody5TextViberServiceCategoryEnumPromotion   SendMessageRequestBody5TextViberServiceCategoryEnum = "promotion"
)

type SendMessageRequestBody5TextViberService struct {
	Category *SendMessageRequestBody5TextViberServiceCategoryEnum `json:"category,omitempty"`
	TTL      *int64                                               `json:"ttl,omitempty"`
	Type     *string                                              `json:"type,omitempty"`
}

// SendMessageRequestBody5Text
// The text of message to send.
type SendMessageRequestBody5Text struct {
	Channel      SendMessageRequestBody5TextChannelEnum     `json:"channel"`
	ClientRef    *string                                    `json:"client_ref,omitempty"`
	From         string                                     `json:"from"`
	MessageType  SendMessageRequestBody5TextMessageTypeEnum `json:"message_type"`
	Text         interface{}                                `json:"text"`
	To           string                                     `json:"to"`
	ViberService *SendMessageRequestBody5TextViberService   `json:"viber_service,omitempty"`
}

type SendMessageRequestBody5ImageChannelEnum string

const (
	SendMessageRequestBody5ImageChannelEnumViberService SendMessageRequestBody5ImageChannelEnum = "viber_service"
)

type SendMessageRequestBody5ImageMessageTypeEnum string

const (
	SendMessageRequestBody5ImageMessageTypeEnumImage SendMessageRequestBody5ImageMessageTypeEnum = "image"
)

type SendMessageRequestBody5ImageViberServiceCategoryEnum string

const (
	SendMessageRequestBody5ImageViberServiceCategoryEnumTransaction SendMessageRequestBody5ImageViberServiceCategoryEnum = "transaction"
	SendMessageRequestBody5ImageViberServiceCategoryEnumPromotion   SendMessageRequestBody5ImageViberServiceCategoryEnum = "promotion"
)

type SendMessageRequestBody5ImageViberService struct {
	Category *SendMessageRequestBody5ImageViberServiceCategoryEnum `json:"category,omitempty"`
	TTL      *int64                                                `json:"ttl,omitempty"`
	Type     *string                                               `json:"type,omitempty"`
}

type SendMessageRequestBody5Image struct {
	Channel      SendMessageRequestBody5ImageChannelEnum     `json:"channel"`
	ClientRef    *string                                     `json:"client_ref,omitempty"`
	From         string                                      `json:"from"`
	Image        interface{}                                 `json:"image"`
	MessageType  SendMessageRequestBody5ImageMessageTypeEnum `json:"message_type"`
	To           string                                      `json:"to"`
	ViberService *SendMessageRequestBody5ImageViberService   `json:"viber_service,omitempty"`
}

type SendMessageSecurity struct {
	BearerAuth *shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
}

type SendMessageRequest struct {
	Request  interface{} `request:"mediaType=application/json"`
	Security SendMessageSecurity
}

type SendMessageResponse struct {
	ContentType                         string
	ErrorInternal                       *shared.ErrorInternal
	ErrorPaymentRequired                *shared.ErrorPaymentRequired
	ErrorThrottled                      *shared.ErrorThrottled
	SendMessage202ApplicationJSONObject map[string]interface{}
	SendMessage401ApplicationJSONOneOf  *interface{}
	SendMessage422ApplicationJSONOneOf  *interface{}
	StatusCode                          int64
}
