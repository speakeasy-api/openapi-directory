package shared

// LongRunning
// Describes settings to use when generating API methods that use the long-running operation pattern. All default values below are from those used in the client library generators (e.g. [Java](https://github.com/googleapis/gapic-generator-java/blob/04c2faa191a9b5a10b92392fe8482279c4404803/src/main/java/com/google/api/generator/gapic/composer/common/RetrySettingsComposer.java)).
type LongRunning struct {
	InitialPollDelay    *string  `json:"initialPollDelay,omitempty"`
	MaxPollDelay        *string  `json:"maxPollDelay,omitempty"`
	PollDelayMultiplier *float32 `json:"pollDelayMultiplier,omitempty"`
	TotalPollTimeout    *string  `json:"totalPollTimeout,omitempty"`
}
