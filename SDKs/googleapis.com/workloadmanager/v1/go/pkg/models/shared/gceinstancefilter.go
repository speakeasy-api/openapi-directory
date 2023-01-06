package shared

// GceInstanceFilter
// Message describing compute engine instance filter
type GceInstanceFilter struct {
	ServiceAccounts []string `json:"serviceAccounts,omitempty"`
}
