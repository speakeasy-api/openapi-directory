package shared

// WorkflowConfigInput
// Represents a Dataform workflow configuration.
type WorkflowConfigInput struct {
	CronSchedule     *string           `json:"cronSchedule,omitempty"`
	InvocationConfig *InvocationConfig `json:"invocationConfig,omitempty"`
	ReleaseConfig    *string           `json:"releaseConfig,omitempty"`
	TimeZone         *string           `json:"timeZone,omitempty"`
}

// WorkflowConfig
// Represents a Dataform workflow configuration.
type WorkflowConfig struct {
	CronSchedule                    *string                    `json:"cronSchedule,omitempty"`
	InvocationConfig                *InvocationConfig          `json:"invocationConfig,omitempty"`
	Name                            *string                    `json:"name,omitempty"`
	RecentScheduledExecutionRecords []ScheduledExecutionRecord `json:"recentScheduledExecutionRecords,omitempty"`
	ReleaseConfig                   *string                    `json:"releaseConfig,omitempty"`
	TimeZone                        *string                    `json:"timeZone,omitempty"`
}
