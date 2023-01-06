package shared

type OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnum string

const (
	OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceComplianceStateEnumUnknown      OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnum = "UNKNOWN"
	OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceComplianceStateEnumCompliant    OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnum = "COMPLIANT"
	OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceComplianceStateEnumNonCompliant OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnum = "NON_COMPLIANT"
)

// OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance
// Compliance data for an OS policy resource.
type OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance struct {
	ComplianceState       *OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnum         `json:"complianceState,omitempty"`
	ComplianceStateReason *string                                                                                          `json:"complianceStateReason,omitempty"`
	ConfigSteps           []OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStep `json:"configSteps,omitempty"`
	ExecResourceOutput    *OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceExecResourceOutput          `json:"execResourceOutput,omitempty"`
	OsPolicyResourceID    *string                                                                                          `json:"osPolicyResourceId,omitempty"`
}
