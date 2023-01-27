package shared

// Container
// A Docker container.
type Container struct {
	Args       []string          `json:"args,omitempty"`
	Command    []string          `json:"command,omitempty"`
	Env        map[string]string `json:"env,omitempty"`
	Image      *string           `json:"image,omitempty"`
	RunAsUser  *int32            `json:"runAsUser,omitempty"`
	WorkingDir *string           `json:"workingDir,omitempty"`
}
