package shared

type HealthCheckStatusEnum string

const (
	HealthCheckStatusEnumPass HealthCheckStatusEnum = "pass"
	HealthCheckStatusEnumFail HealthCheckStatusEnum = "fail"
)

type HealthCheck struct {
	Checks  []HealthCheck         `json:"checks,omitempty"`
	Commit  *string               `json:"commit,omitempty"`
	Message *string               `json:"message,omitempty"`
	Name    string                `json:"name"`
	Status  HealthCheckStatusEnum `json:"status"`
	Version *string               `json:"version,omitempty"`
}
