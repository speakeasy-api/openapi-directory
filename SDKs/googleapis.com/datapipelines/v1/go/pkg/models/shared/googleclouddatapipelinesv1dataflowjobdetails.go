package shared

// GoogleCloudDatapipelinesV1DataflowJobDetails
// Pipeline job details specific to the Dataflow API. This is encapsulated here to allow for more executors to store their specific details separately.
type GoogleCloudDatapipelinesV1DataflowJobDetails struct {
	CurrentWorkers *int32                                `json:"currentWorkers,omitempty"`
	ResourceInfo   map[string]float64                    `json:"resourceInfo,omitempty"`
	SdkVersion     *GoogleCloudDatapipelinesV1SDKVersion `json:"sdkVersion,omitempty"`
}
