package shared

// SapDiscoveryMetadata
// Message describing SAP discovery system metadata
type SapDiscoveryMetadata struct {
	CustomerRegion  *string `json:"customerRegion,omitempty"`
	DefinedSystem   *string `json:"definedSystem,omitempty"`
	EnvironmentType *string `json:"environmentType,omitempty"`
	SapProduct      *string `json:"sapProduct,omitempty"`
}
