package shared

type ToPropertyTypeEnum string

const (
	ToPropertyTypeEnumSms             ToPropertyTypeEnum = "sms"
	ToPropertyTypeEnumViberServiceMsg ToPropertyTypeEnum = "viber_service_msg"
	ToPropertyTypeEnumMessenger       ToPropertyTypeEnum = "messenger"
	ToPropertyTypeEnumWhatsapp        ToPropertyTypeEnum = "whatsapp"
)

type ToProperty struct {
	ID     *string            `json:"id,omitempty"`
	Number *string            `json:"number,omitempty"`
	Type   ToPropertyTypeEnum `json:"type"`
}
