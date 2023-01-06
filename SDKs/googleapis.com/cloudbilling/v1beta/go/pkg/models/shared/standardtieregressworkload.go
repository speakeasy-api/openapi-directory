package shared

// StandardTierEgressWorkload
// Specify Standard Tier Internet egress networking.
type StandardTierEgressWorkload struct {
	EgressRate   *Usage  `json:"egressRate,omitempty"`
	SourceRegion *string `json:"sourceRegion,omitempty"`
}
