package shared

type V1Beta1ImportProducerOverridesRequestForceOnlyEnum string

const (
	V1Beta1ImportProducerOverridesRequestForceOnlyEnumQuotaSafetyCheckUnspecified    V1Beta1ImportProducerOverridesRequestForceOnlyEnum = "QUOTA_SAFETY_CHECK_UNSPECIFIED"
	V1Beta1ImportProducerOverridesRequestForceOnlyEnumLimitDecreaseBelowUsage        V1Beta1ImportProducerOverridesRequestForceOnlyEnum = "LIMIT_DECREASE_BELOW_USAGE"
	V1Beta1ImportProducerOverridesRequestForceOnlyEnumLimitDecreasePercentageTooHigh V1Beta1ImportProducerOverridesRequestForceOnlyEnum = "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH"
)

// V1Beta1ImportProducerOverridesRequest
// Request message for ImportProducerOverrides
type V1Beta1ImportProducerOverridesRequest struct {
	Force        *bool                                                `json:"force,omitempty"`
	ForceOnly    []V1Beta1ImportProducerOverridesRequestForceOnlyEnum `json:"forceOnly,omitempty"`
	InlineSource *V1Beta1OverrideInlineSource                         `json:"inlineSource,omitempty"`
}
