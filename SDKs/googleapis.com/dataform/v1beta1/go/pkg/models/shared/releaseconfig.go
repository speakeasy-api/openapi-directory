package shared

// ReleaseConfig
// Represents a Dataform release configuration.
type ReleaseConfig struct {
	CodeCompilationConfig         *CodeCompilationConfig   `json:"codeCompilationConfig,omitempty"`
	CronSchedule                  *string                  `json:"cronSchedule,omitempty"`
	GitCommitish                  *string                  `json:"gitCommitish,omitempty"`
	Name                          *string                  `json:"name,omitempty"`
	RecentScheduledReleaseRecords []ScheduledReleaseRecord `json:"recentScheduledReleaseRecords,omitempty"`
	ReleaseCompilationResult      *string                  `json:"releaseCompilationResult,omitempty"`
	TimeZone                      *string                  `json:"timeZone,omitempty"`
}

// ReleaseConfigInput
// Represents a Dataform release configuration.
type ReleaseConfigInput struct {
	CodeCompilationConfig    *CodeCompilationConfig `json:"codeCompilationConfig,omitempty"`
	CronSchedule             *string                `json:"cronSchedule,omitempty"`
	GitCommitish             *string                `json:"gitCommitish,omitempty"`
	ReleaseCompilationResult *string                `json:"releaseCompilationResult,omitempty"`
	TimeZone                 *string                `json:"timeZone,omitempty"`
}
