package shared

type TaskGroupStatus struct {
	Counts    map[string]string `json:"counts,omitempty"`
	Instances []InstanceStatus  `json:"instances,omitempty"`
}
