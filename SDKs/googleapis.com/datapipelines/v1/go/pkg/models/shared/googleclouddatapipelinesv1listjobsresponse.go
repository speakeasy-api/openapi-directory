package shared

// GoogleCloudDatapipelinesV1ListJobsResponse
// Response message for ListJobs
type GoogleCloudDatapipelinesV1ListJobsResponse struct {
	Jobs          []GoogleCloudDatapipelinesV1Job `json:"jobs,omitempty"`
	NextPageToken *string                         `json:"nextPageToken,omitempty"`
}
