package shared

// SynthesizeLongAudioRequest
// The top-level message sent by the client for the `SynthesizeLongAudio` method.
type SynthesizeLongAudioRequest struct {
	AudioConfig  *AudioConfig          `json:"audioConfig,omitempty"`
	Input        *SynthesisInput       `json:"input,omitempty"`
	OutputGcsURI *string               `json:"outputGcsUri,omitempty"`
	Voice        *VoiceSelectionParams `json:"voice,omitempty"`
}
