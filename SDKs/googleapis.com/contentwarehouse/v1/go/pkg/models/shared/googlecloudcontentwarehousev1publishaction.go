package shared

// GoogleCloudContentwarehouseV1PublishAction
// Represents the action responsible for publishing messages to a Pub/Sub topic.
type GoogleCloudContentwarehouseV1PublishAction struct {
	Messages []string `json:"messages,omitempty"`
	TopicID  *string  `json:"topicId,omitempty"`
}
