package shared

// GoogleCloudDatapipelinesV1ScheduleSpec
// Details of the schedule the pipeline runs on.
type GoogleCloudDatapipelinesV1ScheduleSpec struct {
	NextJobTime *string `json:"nextJobTime,omitempty"`
	Schedule    *string `json:"schedule,omitempty"`
	TimeZone    *string `json:"timeZone,omitempty"`
}

// GoogleCloudDatapipelinesV1ScheduleSpecInput
// Details of the schedule the pipeline runs on.
type GoogleCloudDatapipelinesV1ScheduleSpecInput struct {
	Schedule *string `json:"schedule,omitempty"`
	TimeZone *string `json:"timeZone,omitempty"`
}
