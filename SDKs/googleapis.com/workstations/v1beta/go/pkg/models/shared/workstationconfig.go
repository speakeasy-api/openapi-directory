package shared

// WorkstationConfig
// A set of configuration options describing how a workstation will be run. Workstation configurations are intended to be shared across multiple workstations.
type WorkstationConfig struct {
	Annotations           map[string]string     `json:"annotations,omitempty"`
	Conditions            []Status              `json:"conditions,omitempty"`
	Container             *Container            `json:"container,omitempty"`
	CreateTime            *string               `json:"createTime,omitempty"`
	Degraded              *bool                 `json:"degraded,omitempty"`
	DeleteTime            *string               `json:"deleteTime,omitempty"`
	DisplayName           *string               `json:"displayName,omitempty"`
	Etag                  *string               `json:"etag,omitempty"`
	Host                  *Host                 `json:"host,omitempty"`
	IdleTimeout           *string               `json:"idleTimeout,omitempty"`
	Labels                map[string]string     `json:"labels,omitempty"`
	Name                  *string               `json:"name,omitempty"`
	PersistentDirectories []PersistentDirectory `json:"persistentDirectories,omitempty"`
	Reconciling           *bool                 `json:"reconciling,omitempty"`
	RunningTimeout        *string               `json:"runningTimeout,omitempty"`
	UID                   *string               `json:"uid,omitempty"`
	UpdateTime            *string               `json:"updateTime,omitempty"`
}

// WorkstationConfigInput
// A set of configuration options describing how a workstation will be run. Workstation configurations are intended to be shared across multiple workstations.
type WorkstationConfigInput struct {
	Annotations           map[string]string     `json:"annotations,omitempty"`
	Container             *Container            `json:"container,omitempty"`
	DisplayName           *string               `json:"displayName,omitempty"`
	Etag                  *string               `json:"etag,omitempty"`
	Host                  *Host                 `json:"host,omitempty"`
	IdleTimeout           *string               `json:"idleTimeout,omitempty"`
	Labels                map[string]string     `json:"labels,omitempty"`
	Name                  *string               `json:"name,omitempty"`
	PersistentDirectories []PersistentDirectory `json:"persistentDirectories,omitempty"`
	RunningTimeout        *string               `json:"runningTimeout,omitempty"`
}
