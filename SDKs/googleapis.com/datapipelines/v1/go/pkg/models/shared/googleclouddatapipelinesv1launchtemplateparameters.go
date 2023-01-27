package shared

// GoogleCloudDatapipelinesV1LaunchTemplateParameters
// Parameters to provide to the template being launched.
type GoogleCloudDatapipelinesV1LaunchTemplateParameters struct {
	Environment          *GoogleCloudDatapipelinesV1RuntimeEnvironment `json:"environment,omitempty"`
	JobName              *string                                       `json:"jobName,omitempty"`
	Parameters           map[string]string                             `json:"parameters,omitempty"`
	TransformNameMapping map[string]string                             `json:"transformNameMapping,omitempty"`
	Update               *bool                                         `json:"update,omitempty"`
}
