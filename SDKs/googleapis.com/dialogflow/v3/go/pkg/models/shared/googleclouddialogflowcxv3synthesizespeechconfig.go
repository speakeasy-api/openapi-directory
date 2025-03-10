// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GoogleCloudDialogflowCxV3SynthesizeSpeechConfig - Configuration of how speech should be synthesized.
type GoogleCloudDialogflowCxV3SynthesizeSpeechConfig struct {
	// Optional. An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech. Effects are applied on top of each other in the order they are given.
	EffectsProfileID []string `json:"effectsProfileId,omitempty"`
	// Optional. Speaking pitch, in the range [-20.0, 20.0]. 20 means increase 20 semitones from the original pitch. -20 means decrease 20 semitones from the original pitch.
	Pitch *float64 `json:"pitch,omitempty"`
	// Optional. Speaking rate/speed, in the range [0.25, 4.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. If unset(0.0), defaults to the native 1.0 speed. Any other values < 0.25 or > 4.0 will return an error.
	SpeakingRate *float64 `json:"speakingRate,omitempty"`
	// Description of which voice to use for speech synthesis.
	Voice *GoogleCloudDialogflowCxV3VoiceSelectionParams `json:"voice,omitempty"`
	// Optional. Volume gain (in dB) of the normal native volume supported by the specific voice, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. We strongly recommend not to exceed +10 (dB) as there's usually no effective increase in loudness for any value greater than that.
	VolumeGainDb *float64 `json:"volumeGainDb,omitempty"`
}
