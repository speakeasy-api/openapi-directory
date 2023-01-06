package shared

// Workload
// Specifies usage on a single Google Cloud product over a time frame. Each Google Cloud product has its own message, containing specific product configuration parameters of the product usage amounts along each dimension in which the product is billed.
type Workload struct {
	CloudCdnEgressWorkload          *CloudCdnEgressWorkload          `json:"cloudCdnEgressWorkload,omitempty"`
	CloudCdnWorkload                *CloudCdnWorkload                `json:"cloudCdnWorkload,omitempty"`
	CloudInterconnectEgressWorkload *CloudInterconnectEgressWorkload `json:"cloudInterconnectEgressWorkload,omitempty"`
	CloudInterconnectWorkload       *CloudInterconnectWorkload       `json:"cloudInterconnectWorkload,omitempty"`
	CloudStorageEgressWorkload      *CloudStorageEgressWorkload      `json:"cloudStorageEgressWorkload,omitempty"`
	CloudStorageWorkload            *CloudStorageWorkload            `json:"cloudStorageWorkload,omitempty"`
	ComputeVMWorkload               *ComputeVMWorkload               `json:"computeVmWorkload,omitempty"`
	Name                            *string                          `json:"name,omitempty"`
	PremiumTierEgressWorkload       *PremiumTierEgressWorkload       `json:"premiumTierEgressWorkload,omitempty"`
	StandardTierEgressWorkload      *StandardTierEgressWorkload      `json:"standardTierEgressWorkload,omitempty"`
}
