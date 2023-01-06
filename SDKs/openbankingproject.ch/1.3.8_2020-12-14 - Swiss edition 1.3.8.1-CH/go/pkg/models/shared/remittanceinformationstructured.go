package shared

type RemittanceInformationStructuredScoRorQrRorIpiEnum string

const (
	RemittanceInformationStructuredSCORorQRRorIPIEnumScor RemittanceInformationStructuredScoRorQrRorIpiEnum = "SCOR"
	RemittanceInformationStructuredSCORorQRRorIPIEnumQrr  RemittanceInformationStructuredScoRorQrRorIpiEnum = "QRR"
	RemittanceInformationStructuredSCORorQRRorIPIEnumIpi  RemittanceInformationStructuredScoRorQrRorIpiEnum = "IPI"
)

// RemittanceInformationStructured
// Structured remittance information.
type RemittanceInformationStructured struct {
	SCORorQRRorIPI                  *RemittanceInformationStructuredScoRorQrRorIpiEnum `json:"SCORorQRRorIPI,omitempty"`
	AdditionalRemittanceInformation *string                                            `json:"additionalRemittanceInformation,omitempty"`
	Reference                       string                                             `json:"reference"`
	ReferenceIssuer                 *string                                            `json:"referenceIssuer,omitempty"`
	ReferenceType                   *string                                            `json:"referenceType,omitempty"`
}
