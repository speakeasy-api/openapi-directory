package shared

type CreateAudioRenderPresetEnum string

const (
	CreateAudioRenderPresetEnumMasterMp3 CreateAudioRenderPresetEnum = "MASTER_MP3"
	CreateAudioRenderPresetEnumMasterWav CreateAudioRenderPresetEnum = "MASTER_WAV"
	CreateAudioRenderPresetEnumStemsWav  CreateAudioRenderPresetEnum = "STEMS_WAV"
)

// CreateAudioRender
// Data required to create an audio render
type CreateAudioRender struct {
	Filename string                      `json:"filename"`
	Preset   CreateAudioRenderPresetEnum `json:"preset"`
	Timeline AudioRenderTimeline         `json:"timeline"`
}
