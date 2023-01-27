package shared

// Host
// Runtime host for a workstation.
type Host struct {
	GceInstance *GceInstance `json:"gceInstance,omitempty"`
}
