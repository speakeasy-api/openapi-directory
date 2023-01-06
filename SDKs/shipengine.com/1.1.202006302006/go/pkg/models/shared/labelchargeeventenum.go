package shared

type LabelChargeEventEnum string

const (
	LabelChargeEventEnumCarrierDefault      LabelChargeEventEnum = "carrier_default"
	LabelChargeEventEnumOnCreation          LabelChargeEventEnum = "on_creation"
	LabelChargeEventEnumOnCarrierAcceptance LabelChargeEventEnum = "on_carrier_acceptance"
)
