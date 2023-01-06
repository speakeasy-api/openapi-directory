package shared

type MessagePropertyContentTypeEnum string

const (
	MessagePropertyContentTypeEnumText     MessagePropertyContentTypeEnum = "text"
	MessagePropertyContentTypeEnumImage    MessagePropertyContentTypeEnum = "image"
	MessagePropertyContentTypeEnumAudio    MessagePropertyContentTypeEnum = "audio"
	MessagePropertyContentTypeEnumVideo    MessagePropertyContentTypeEnum = "video"
	MessagePropertyContentTypeEnumFile     MessagePropertyContentTypeEnum = "file"
	MessagePropertyContentTypeEnumTemplate MessagePropertyContentTypeEnum = "template"
	MessagePropertyContentTypeEnumCustom   MessagePropertyContentTypeEnum = "custom"
)

type MessagePropertyContent struct {
	Audio    *AudioProperty                 `json:"audio,omitempty"`
	File     *FileProperty                  `json:"file,omitempty"`
	Image    *ImageProperty                 `json:"image,omitempty"`
	Template *TemplateProperty              `json:"template,omitempty"`
	Text     *string                        `json:"text,omitempty"`
	Type     MessagePropertyContentTypeEnum `json:"type"`
	Video    *VideoProperty                 `json:"video,omitempty"`
}

type MessagePropertyMessengerCategoryEnum string

const (
	MessagePropertyMessengerCategoryEnumResponse   MessagePropertyMessengerCategoryEnum = "response"
	MessagePropertyMessengerCategoryEnumUpdate     MessagePropertyMessengerCategoryEnum = "update"
	MessagePropertyMessengerCategoryEnumMessageTag MessagePropertyMessengerCategoryEnum = "message_tag"
)

type MessagePropertyMessenger struct {
	Category *MessagePropertyMessengerCategoryEnum `json:"category,omitempty"`
	Tag      *string                               `json:"tag,omitempty"`
}

type MessagePropertyViberServiceMsgCategoryEnum string

const (
	MessagePropertyViberServiceMsgCategoryEnumTransaction MessagePropertyViberServiceMsgCategoryEnum = "transaction"
	MessagePropertyViberServiceMsgCategoryEnumPromotion   MessagePropertyViberServiceMsgCategoryEnum = "promotion"
)

type MessagePropertyViberServiceMsg struct {
	Category *MessagePropertyViberServiceMsgCategoryEnum `json:"category,omitempty"`
	TTL      *int64                                      `json:"ttl,omitempty"`
}

type MessagePropertyWhatsappPolicyEnum string

const (
	MessagePropertyWhatsappPolicyEnumFallback      MessagePropertyWhatsappPolicyEnum = "fallback"
	MessagePropertyWhatsappPolicyEnumDeterministic MessagePropertyWhatsappPolicyEnum = "deterministic"
)

type MessagePropertyWhatsapp struct {
	Locale *string                            `json:"locale,omitempty"`
	Policy *MessagePropertyWhatsappPolicyEnum `json:"policy,omitempty"`
}

type MessageProperty struct {
	Content         MessagePropertyContent          `json:"content"`
	Messenger       *MessagePropertyMessenger       `json:"messenger,omitempty"`
	ViberServiceMsg *MessagePropertyViberServiceMsg `json:"viber_service_msg,omitempty"`
	Whatsapp        *MessagePropertyWhatsapp        `json:"whatsapp,omitempty"`
}
