package shared

// ScheduledReleaseRecord
// A record of an attempt to create a compilation result for this release config.
type ScheduledReleaseRecord struct {
	CompilationResult *string `json:"compilationResult,omitempty"`
	ErrorStatus       *Status `json:"errorStatus,omitempty"`
	ReleaseTime       *string `json:"releaseTime,omitempty"`
}
