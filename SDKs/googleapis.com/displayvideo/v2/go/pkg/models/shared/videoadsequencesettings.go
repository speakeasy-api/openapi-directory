package shared

type VideoAdSequenceSettingsMinimumDurationEnum string

const (
	VideoAdSequenceSettingsMinimumDurationEnumVideoAdSequenceMinimumDurationUnspecified VideoAdSequenceSettingsMinimumDurationEnum = "VIDEO_AD_SEQUENCE_MINIMUM_DURATION_UNSPECIFIED"
	VideoAdSequenceSettingsMinimumDurationEnumVideoAdSequenceMinimumDurationWeek        VideoAdSequenceSettingsMinimumDurationEnum = "VIDEO_AD_SEQUENCE_MINIMUM_DURATION_WEEK"
	VideoAdSequenceSettingsMinimumDurationEnumVideoAdSequenceMinimumDurationMonth       VideoAdSequenceSettingsMinimumDurationEnum = "VIDEO_AD_SEQUENCE_MINIMUM_DURATION_MONTH"
)

// VideoAdSequenceSettings
// Settings related to VideoAdSequence.
type VideoAdSequenceSettings struct {
	MinimumDuration *VideoAdSequenceSettingsMinimumDurationEnum `json:"minimumDuration,omitempty"`
	Steps           []VideoAdSequenceStep                       `json:"steps,omitempty"`
}
