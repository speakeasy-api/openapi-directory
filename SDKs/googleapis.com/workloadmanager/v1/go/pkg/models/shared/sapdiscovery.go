package shared

// SapDiscovery
// The schema of SAP system discovery data.
type SapDiscovery struct {
	ApplicationLayer *SapDiscoveryComponent `json:"applicationLayer,omitempty"`
	DatabaseLayer    *SapDiscoveryComponent `json:"databaseLayer,omitempty"`
	Metadata         *SapDiscoveryMetadata  `json:"metadata,omitempty"`
	SystemID         *string                `json:"systemId,omitempty"`
	UpdateTime       *string                `json:"updateTime,omitempty"`
}
