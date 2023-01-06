package shared

type OsPolicyResourceComplianceStateEnum string

const (
	OSPolicyResourceComplianceStateEnumOsPolicyComplianceStateUnspecified OsPolicyResourceComplianceStateEnum = "OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED"
	OSPolicyResourceComplianceStateEnumCompliant                          OsPolicyResourceComplianceStateEnum = "COMPLIANT"
	OSPolicyResourceComplianceStateEnumNonCompliant                       OsPolicyResourceComplianceStateEnum = "NON_COMPLIANT"
	OSPolicyResourceComplianceStateEnumUnknown                            OsPolicyResourceComplianceStateEnum = "UNKNOWN"
	OSPolicyResourceComplianceStateEnumNoOsPoliciesApplicable             OsPolicyResourceComplianceStateEnum = "NO_OS_POLICIES_APPLICABLE"
)

// OsPolicyResourceCompliance
// Compliance data for an OS policy resource.
type OsPolicyResourceCompliance struct {
	ConfigSteps        []OsPolicyResourceConfigStep                  `json:"configSteps,omitempty"`
	ExecResourceOutput *OsPolicyResourceComplianceExecResourceOutput `json:"execResourceOutput,omitempty"`
	OsPolicyResourceID *string                                       `json:"osPolicyResourceId,omitempty"`
	State              *OsPolicyResourceComplianceStateEnum          `json:"state,omitempty"`
}
