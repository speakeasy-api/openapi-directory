package shared

// SearchBackgroundJobsResponse
// Response message for 'SearchBackgroundJobs' request.
type SearchBackgroundJobsResponse struct {
	Jobs []BackgroundJobLogEntry `json:"jobs,omitempty"`
}
