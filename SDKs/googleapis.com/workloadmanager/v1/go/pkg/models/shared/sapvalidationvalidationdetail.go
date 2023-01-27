package shared

type SapValidationValidationDetailSapValidationTypeEnum string

const (
	SapValidationValidationDetailSapValidationTypeEnumSapValidationTypeUnspecified SapValidationValidationDetailSapValidationTypeEnum = "SAP_VALIDATION_TYPE_UNSPECIFIED"
	SapValidationValidationDetailSapValidationTypeEnumSystem                       SapValidationValidationDetailSapValidationTypeEnum = "SYSTEM"
	SapValidationValidationDetailSapValidationTypeEnumCorosync                     SapValidationValidationDetailSapValidationTypeEnum = "COROSYNC"
	SapValidationValidationDetailSapValidationTypeEnumPacemaker                    SapValidationValidationDetailSapValidationTypeEnum = "PACEMAKER"
	SapValidationValidationDetailSapValidationTypeEnumHana                         SapValidationValidationDetailSapValidationTypeEnum = "HANA"
	SapValidationValidationDetailSapValidationTypeEnumNetweaver                    SapValidationValidationDetailSapValidationTypeEnum = "NETWEAVER"
)

// SapValidationValidationDetail
// Message describing the SAP validation metrics.
type SapValidationValidationDetail struct {
	Details           map[string]string                                   `json:"details,omitempty"`
	SapValidationType *SapValidationValidationDetailSapValidationTypeEnum `json:"sapValidationType,omitempty"`
}
