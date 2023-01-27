package shared

type WorkstationStateEnum string

const (
	WorkstationStateEnumStateUnspecified WorkstationStateEnum = "STATE_UNSPECIFIED"
	WorkstationStateEnumStateStarting    WorkstationStateEnum = "STATE_STARTING"
	WorkstationStateEnumStateRunning     WorkstationStateEnum = "STATE_RUNNING"
	WorkstationStateEnumStateStopping    WorkstationStateEnum = "STATE_STOPPING"
	WorkstationStateEnumStateStopped     WorkstationStateEnum = "STATE_STOPPED"
)

// Workstation
// A single instance of a developer workstation with its own persistent storage.
type Workstation struct {
	Annotations map[string]string     `json:"annotations,omitempty"`
	CreateTime  *string               `json:"createTime,omitempty"`
	DeleteTime  *string               `json:"deleteTime,omitempty"`
	DisplayName *string               `json:"displayName,omitempty"`
	Etag        *string               `json:"etag,omitempty"`
	Host        *string               `json:"host,omitempty"`
	Labels      map[string]string     `json:"labels,omitempty"`
	Name        *string               `json:"name,omitempty"`
	Reconciling *bool                 `json:"reconciling,omitempty"`
	State       *WorkstationStateEnum `json:"state,omitempty"`
	UID         *string               `json:"uid,omitempty"`
	UpdateTime  *string               `json:"updateTime,omitempty"`
}

// WorkstationInput
// A single instance of a developer workstation with its own persistent storage.
type WorkstationInput struct {
	Annotations map[string]string `json:"annotations,omitempty"`
	DisplayName *string           `json:"displayName,omitempty"`
	Etag        *string           `json:"etag,omitempty"`
	Labels      map[string]string `json:"labels,omitempty"`
	Name        *string           `json:"name,omitempty"`
}
