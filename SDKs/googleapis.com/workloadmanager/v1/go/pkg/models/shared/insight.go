package shared

// InsightInput
// A presentation of host resource usage where the workload runs.
type InsightInput struct {
	SapDiscovery  *SapDiscovery  `json:"sapDiscovery,omitempty"`
	SapValidation *SapValidation `json:"sapValidation,omitempty"`
}
