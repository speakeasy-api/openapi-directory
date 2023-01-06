package shared

type LicenseAudioLicenseEnum string

const (
	LicenseAudioLicenseEnumAudioPlatform        LicenseAudioLicenseEnum = "audio_platform"
	LicenseAudioLicenseEnumPremierMusicBasic    LicenseAudioLicenseEnum = "premier_music_basic"
	LicenseAudioLicenseEnumPremierMusicExtended LicenseAudioLicenseEnum = "premier_music_extended"
	LicenseAudioLicenseEnumPremierMusicPro      LicenseAudioLicenseEnum = "premier_music_pro"
	LicenseAudioLicenseEnumPremierMusicComp     LicenseAudioLicenseEnum = "premier_music_comp"
)

// LicenseAudio
// An audio track in a licensing request
type LicenseAudio struct {
	AudioID  string                   `json:"audio_id"`
	License  *LicenseAudioLicenseEnum `json:"license,omitempty"`
	SearchID *string                  `json:"search_id,omitempty"`
}
