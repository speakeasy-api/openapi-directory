package shared

// GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment
// Represents one segment of audio.
type GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment struct {
	AllowPlaybackInterruption *bool   `json:"allowPlaybackInterruption,omitempty"`
	Audio                     *string `json:"audio,omitempty"`
	URI                       *string `json:"uri,omitempty"`
}

// GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegmentInput
// Represents one segment of audio.
type GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegmentInput struct {
	Audio *string `json:"audio,omitempty"`
	URI   *string `json:"uri,omitempty"`
}
