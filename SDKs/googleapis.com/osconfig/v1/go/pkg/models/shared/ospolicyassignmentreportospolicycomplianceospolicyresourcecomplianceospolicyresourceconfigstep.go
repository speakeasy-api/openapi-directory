package shared

type OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStepTypeEnum string

const (
	OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceOSPolicyResourceConfigStepTypeEnumTypeUnspecified                  OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStepTypeEnum = "TYPE_UNSPECIFIED"
	OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceOSPolicyResourceConfigStepTypeEnumValidation                       OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStepTypeEnum = "VALIDATION"
	OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceOSPolicyResourceConfigStepTypeEnumDesiredStateCheck                OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStepTypeEnum = "DESIRED_STATE_CHECK"
	OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceOSPolicyResourceConfigStepTypeEnumDesiredStateEnforcement          OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStepTypeEnum = "DESIRED_STATE_ENFORCEMENT"
	OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceOSPolicyResourceConfigStepTypeEnumDesiredStateCheckPostEnforcement OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStepTypeEnum = "DESIRED_STATE_CHECK_POST_ENFORCEMENT"
)

// OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStep
// Step performed by the OS Config agent for configuring an `OSPolicy` resource to its desired state.
type OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStep struct {
	ErrorMessage *string                                                                                                 `json:"errorMessage,omitempty"`
	Type         *OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStepTypeEnum `json:"type,omitempty"`
}
