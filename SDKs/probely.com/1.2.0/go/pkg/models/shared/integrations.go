package shared

// Integrations
// Available and installed integrations
type Integrations struct {
	Available *IntegrationFields `json:"available,omitempty"`
	Installed *IntegrationFields `json:"installed,omitempty"`
}
