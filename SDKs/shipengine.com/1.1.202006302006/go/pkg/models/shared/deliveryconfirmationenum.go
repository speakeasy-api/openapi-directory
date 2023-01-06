package shared

type DeliveryConfirmationEnum string

const (
	DeliveryConfirmationEnumNone            DeliveryConfirmationEnum = "none"
	DeliveryConfirmationEnumDelivery        DeliveryConfirmationEnum = "delivery"
	DeliveryConfirmationEnumSignature       DeliveryConfirmationEnum = "signature"
	DeliveryConfirmationEnumAdultSignature  DeliveryConfirmationEnum = "adult_signature"
	DeliveryConfirmationEnumDirectSignature DeliveryConfirmationEnum = "direct_signature"
	DeliveryConfirmationEnumDeliveryMailed  DeliveryConfirmationEnum = "delivery_mailed"
)
