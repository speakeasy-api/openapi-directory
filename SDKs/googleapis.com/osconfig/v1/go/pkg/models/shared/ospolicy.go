package shared

type OsPolicyModeEnum string

const (
	OSPolicyModeEnumModeUnspecified OsPolicyModeEnum = "MODE_UNSPECIFIED"
	OSPolicyModeEnumValidation      OsPolicyModeEnum = "VALIDATION"
	OSPolicyModeEnumEnforcement     OsPolicyModeEnum = "ENFORCEMENT"
)

// OsPolicy
// An OS policy defines the desired state configuration for a VM.
type OsPolicy struct {
	AllowNoResourceGroupMatch *bool                   `json:"allowNoResourceGroupMatch,omitempty"`
	Description               *string                 `json:"description,omitempty"`
	ID                        *string                 `json:"id,omitempty"`
	Mode                      *OsPolicyModeEnum       `json:"mode,omitempty"`
	ResourceGroups            []OsPolicyResourceGroup `json:"resourceGroups,omitempty"`
}
