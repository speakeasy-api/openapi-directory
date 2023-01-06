package shared

type ObscaSupportData1AppliedAuthenticationApproachEnum string

const (
	OBSCASupportData1AppliedAuthenticationApproachEnumCa  ObscaSupportData1AppliedAuthenticationApproachEnum = "CA"
	OBSCASupportData1AppliedAuthenticationApproachEnumSca ObscaSupportData1AppliedAuthenticationApproachEnum = "SCA"
)

type ObscaSupportData1RequestedScaExemptionTypeEnum string

const (
	OBSCASupportData1RequestedSCAExemptionTypeEnumBillPayment       ObscaSupportData1RequestedScaExemptionTypeEnum = "BillPayment"
	OBSCASupportData1RequestedSCAExemptionTypeEnumContactlessTravel ObscaSupportData1RequestedScaExemptionTypeEnum = "ContactlessTravel"
	OBSCASupportData1RequestedSCAExemptionTypeEnumEcommerceGoods    ObscaSupportData1RequestedScaExemptionTypeEnum = "EcommerceGoods"
	OBSCASupportData1RequestedSCAExemptionTypeEnumEcommerceServices ObscaSupportData1RequestedScaExemptionTypeEnum = "EcommerceServices"
	OBSCASupportData1RequestedSCAExemptionTypeEnumKiosk             ObscaSupportData1RequestedScaExemptionTypeEnum = "Kiosk"
	OBSCASupportData1RequestedSCAExemptionTypeEnumParking           ObscaSupportData1RequestedScaExemptionTypeEnum = "Parking"
	OBSCASupportData1RequestedSCAExemptionTypeEnumPartyToParty      ObscaSupportData1RequestedScaExemptionTypeEnum = "PartyToParty"
)

// ObscaSupportData1
// Supporting Data provided by TPP, when requesting SCA Exemption.
type ObscaSupportData1 struct {
	AppliedAuthenticationApproach *ObscaSupportData1AppliedAuthenticationApproachEnum `json:"AppliedAuthenticationApproach,omitempty"`
	ReferencePaymentOrderID       *string                                             `json:"ReferencePaymentOrderId,omitempty"`
	RequestedSCAExemptionType     *ObscaSupportData1RequestedScaExemptionTypeEnum     `json:"RequestedSCAExemptionType,omitempty"`
}
