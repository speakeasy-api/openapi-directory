package operations

import (
	"openapi/pkg/models/shared"
)

type SendMessageRequestBody1VideoMessageTypeEnum string

const (
	SendMessageRequestBody1VideoMessageTypeEnumVideo SendMessageRequestBody1VideoMessageTypeEnum = "video"
)

type SendMessageRequestBody1VideoVideo struct {
	URL string `json:"url"`
}

type SendMessageRequestBody1Video struct {
	MessageType *SendMessageRequestBody1VideoMessageTypeEnum `json:"message_type,omitempty"`
	Video       SendMessageRequestBody1VideoVideo            `json:"video"`
}

type SendMessageRequestBody1File struct {
	File interface{} `json:"file"`
}

type SendMessageRequestBody1TextMessageTypeEnum string

const (
	SendMessageRequestBody1TextMessageTypeEnumText SendMessageRequestBody1TextMessageTypeEnum = "text"
)

// SendMessageRequestBody1Text
// The text of message to send.
type SendMessageRequestBody1Text struct {
	MessageType *SendMessageRequestBody1TextMessageTypeEnum `json:"message_type,omitempty"`
	Text        string                                      `json:"text"`
}

type SendMessageRequestBody1ImageImage struct {
	URL string `json:"url"`
}

type SendMessageRequestBody1ImageMessageTypeEnum string

const (
	SendMessageRequestBody1ImageMessageTypeEnumImage SendMessageRequestBody1ImageMessageTypeEnum = "image"
)

type SendMessageRequestBody1Image struct {
	Image       SendMessageRequestBody1ImageImage            `json:"image"`
	MessageType *SendMessageRequestBody1ImageMessageTypeEnum `json:"message_type,omitempty"`
}

type SendMessageRequestBody1AudioAudio struct {
	URL string `json:"url"`
}

type SendMessageRequestBody1AudioMessageTypeEnum string

const (
	SendMessageRequestBody1AudioMessageTypeEnumAudio SendMessageRequestBody1AudioMessageTypeEnum = "audio"
)

type SendMessageRequestBody1Audio struct {
	Audio       SendMessageRequestBody1AudioAudio            `json:"audio"`
	MessageType *SendMessageRequestBody1AudioMessageTypeEnum `json:"message_type,omitempty"`
}

type SendMessageRequestBody2TextMessageTypeEnum string

const (
	SendMessageRequestBody2TextMessageTypeEnumText SendMessageRequestBody2TextMessageTypeEnum = "text"
)

// SendMessageRequestBody2Text
// The text of message to send.
type SendMessageRequestBody2Text struct {
	MessageType *SendMessageRequestBody2TextMessageTypeEnum `json:"message_type,omitempty"`
	Text        string                                      `json:"text"`
}

type SendMessageRequestBody2ImageImage struct {
	URL string `json:"url"`
}

type SendMessageRequestBody2ImageMessageTypeEnum string

const (
	SendMessageRequestBody2ImageMessageTypeEnumImage SendMessageRequestBody2ImageMessageTypeEnum = "image"
)

type SendMessageRequestBody2Image struct {
	Image       SendMessageRequestBody2ImageImage            `json:"image"`
	MessageType *SendMessageRequestBody2ImageMessageTypeEnum `json:"message_type,omitempty"`
}

// SendMessageRequestBody3Text
// The text of message to send.
type SendMessageRequestBody3Text struct {
	Text interface{} `json:"text"`
}

type SendMessageRequestBody4ImageImage struct {
	URL string `json:"url"`
}

type SendMessageRequestBody4ImageMessageTypeEnum string

const (
	SendMessageRequestBody4ImageMessageTypeEnumImage SendMessageRequestBody4ImageMessageTypeEnum = "image"
)

type SendMessageRequestBody4Image struct {
	Image       SendMessageRequestBody4ImageImage            `json:"image"`
	MessageType *SendMessageRequestBody4ImageMessageTypeEnum `json:"message_type,omitempty"`
}

type SendMessageRequestBody4VideoMessageTypeEnum string

const (
	SendMessageRequestBody4VideoMessageTypeEnumVideo SendMessageRequestBody4VideoMessageTypeEnum = "video"
)

type SendMessageRequestBody4Video struct {
	MessageType *SendMessageRequestBody4VideoMessageTypeEnum `json:"message_type,omitempty"`
	Video       interface{}                                  `json:"video"`
}

type SendMessageRequestBody4AudioAudio struct {
	URL string `json:"url"`
}

type SendMessageRequestBody4AudioMessageTypeEnum string

const (
	SendMessageRequestBody4AudioMessageTypeEnumAudio SendMessageRequestBody4AudioMessageTypeEnum = "audio"
)

type SendMessageRequestBody4Audio struct {
	Audio       SendMessageRequestBody4AudioAudio            `json:"audio"`
	MessageType *SendMessageRequestBody4AudioMessageTypeEnum `json:"message_type,omitempty"`
}

type SendMessageRequestBody4VCardMessageTypeEnum string

const (
	SendMessageRequestBody4VCardMessageTypeEnumVcard SendMessageRequestBody4VCardMessageTypeEnum = "vcard"
)

type SendMessageRequestBody4VCardVcard struct {
	URL string `json:"url"`
}

type SendMessageRequestBody4VCard struct {
	MessageType *SendMessageRequestBody4VCardMessageTypeEnum `json:"message_type,omitempty"`
	Vcard       SendMessageRequestBody4VCardVcard            `json:"vcard"`
}

type SendMessageRequestBody5Image struct {
	Image interface{} `json:"image"`
}

type SendMessageRequestBody5Audio struct {
	Audio interface{} `json:"audio"`
}

type SendMessageRequestBody5Video struct {
	Video interface{} `json:"video"`
}

type SendMessageRequestBody5FileFile struct {
	URL string `json:"url"`
}

type SendMessageRequestBody5FileMessageTypeEnum string

const (
	SendMessageRequestBody5FileMessageTypeEnumFile SendMessageRequestBody5FileMessageTypeEnum = "file"
)

type SendMessageRequestBody5File struct {
	File        SendMessageRequestBody5FileFile             `json:"file"`
	MessageType *SendMessageRequestBody5FileMessageTypeEnum `json:"message_type,omitempty"`
}

type SendMessageRequestBody5TemplateChannelEnum string

const (
	SendMessageRequestBody5TemplateChannelEnumWhatsapp SendMessageRequestBody5TemplateChannelEnum = "whatsapp"
)

type SendMessageRequestBody5Template struct {
	Channel *SendMessageRequestBody5TemplateChannelEnum `json:"channel,omitempty"`
	From    *string                                     `json:"from,omitempty"`
	To      *string                                     `json:"to,omitempty"`
}

// SendMessageRequestBody5Text
// The text of message to send.
type SendMessageRequestBody5Text struct {
	Text interface{} `json:"text"`
}

type SendMessageRequestBody5Location struct {
	Text *interface{} `json:"text,omitempty"`
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
