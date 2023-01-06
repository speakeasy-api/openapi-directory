package shared

type OsPolicyResourceConfigStepOutcomeEnum string

const (
	OSPolicyResourceConfigStepOutcomeEnumOutcomeUnspecified OsPolicyResourceConfigStepOutcomeEnum = "OUTCOME_UNSPECIFIED"
	OSPolicyResourceConfigStepOutcomeEnumSucceeded          OsPolicyResourceConfigStepOutcomeEnum = "SUCCEEDED"
	OSPolicyResourceConfigStepOutcomeEnumFailed             OsPolicyResourceConfigStepOutcomeEnum = "FAILED"
)

type OsPolicyResourceConfigStepTypeEnum string

const (
	OSPolicyResourceConfigStepTypeEnumTypeUnspecified                  OsPolicyResourceConfigStepTypeEnum = "TYPE_UNSPECIFIED"
	OSPolicyResourceConfigStepTypeEnumValidation                       OsPolicyResourceConfigStepTypeEnum = "VALIDATION"
	OSPolicyResourceConfigStepTypeEnumDesiredStateCheck                OsPolicyResourceConfigStepTypeEnum = "DESIRED_STATE_CHECK"
	OSPolicyResourceConfigStepTypeEnumDesiredStateEnforcement          OsPolicyResourceConfigStepTypeEnum = "DESIRED_STATE_ENFORCEMENT"
	OSPolicyResourceConfigStepTypeEnumDesiredStateCheckPostEnforcement OsPolicyResourceConfigStepTypeEnum = "DESIRED_STATE_CHECK_POST_ENFORCEMENT"
)

// OsPolicyResourceConfigStep
// Step performed by the OS Config agent for configuring an `OSPolicyResource` to its desired state.
type OsPolicyResourceConfigStep struct {
	ErrorMessage *string                                `json:"errorMessage,omitempty"`
	Outcome      *OsPolicyResourceConfigStepOutcomeEnum `json:"outcome,omitempty"`
	Type         *OsPolicyResourceConfigStepTypeEnum    `json:"type,omitempty"`
}
