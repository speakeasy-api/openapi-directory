package shared

type GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum string

const (
	GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnumRebillingBasisUnspecified GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum = "REBILLING_BASIS_UNSPECIFIED"
	GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnumCostAtList                GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum = "COST_AT_LIST"
	GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnumDirectCustomerCost        GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum = "DIRECT_CUSTOMER_COST"
)

// GoogleCloudChannelV1ConditionalOverride
// Specifies the override to conditionally apply.
type GoogleCloudChannelV1ConditionalOverride struct {
	Adjustment         *GoogleCloudChannelV1RepricingAdjustment                   `json:"adjustment,omitempty"`
	RebillingBasis     *GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum `json:"rebillingBasis,omitempty"`
	RepricingCondition *GoogleCloudChannelV1RepricingCondition                    `json:"repricingCondition,omitempty"`
}
