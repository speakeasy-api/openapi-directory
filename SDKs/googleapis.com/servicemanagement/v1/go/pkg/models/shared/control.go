package shared

// Control
// Selects and configures the service controller used by the service. Example: control: environment: servicecontrol.googleapis.com
type Control struct {
	Environment *string `json:"environment,omitempty"`
}
