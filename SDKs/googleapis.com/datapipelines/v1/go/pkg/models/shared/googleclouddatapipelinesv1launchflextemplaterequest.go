package shared

// GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest
// A request to launch a Dataflow job from a Flex Template.
type GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest struct {
	LaunchParameter *GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter `json:"launchParameter,omitempty"`
	Location        *string                                                `json:"location,omitempty"`
	ProjectID       *string                                                `json:"projectId,omitempty"`
	ValidateOnly    *bool                                                  `json:"validateOnly,omitempty"`
}
