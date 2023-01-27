package shared

// SapDiscoveryComponent
// Message describing the system component.
type SapDiscoveryComponent struct {
	ApplicationType *string                `json:"applicationType,omitempty"`
	DatabaseType    *string                `json:"databaseType,omitempty"`
	HostProject     *string                `json:"hostProject,omitempty"`
	Resources       []SapDiscoveryResource `json:"resources,omitempty"`
	Sid             *string                `json:"sid,omitempty"`
}
