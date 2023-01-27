package shared

// GoogleCloudDatapipelinesV1Workload
// Workload details for creating the pipeline jobs.
type GoogleCloudDatapipelinesV1Workload struct {
	DataflowFlexTemplateRequest   *GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest `json:"dataflowFlexTemplateRequest,omitempty"`
	DataflowLaunchTemplateRequest *GoogleCloudDatapipelinesV1LaunchTemplateRequest     `json:"dataflowLaunchTemplateRequest,omitempty"`
}
