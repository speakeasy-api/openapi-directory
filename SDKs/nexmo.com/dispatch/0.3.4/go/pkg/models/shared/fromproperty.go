package shared

type FromPropertyTypeEnum string

const (
	FromPropertyTypeEnumSms             FromPropertyTypeEnum = "sms"
	FromPropertyTypeEnumViberServiceMsg FromPropertyTypeEnum = "viber_service_msg"
	FromPropertyTypeEnumMessenger       FromPropertyTypeEnum = "messenger"
	FromPropertyTypeEnumWhatsapp        FromPropertyTypeEnum = "whatsapp"
)

type FromProperty struct {
	ID     *string              `json:"id,omitempty"`
	Number *string              `json:"number,omitempty"`
	Type   FromPropertyTypeEnum `json:"type"`
}
