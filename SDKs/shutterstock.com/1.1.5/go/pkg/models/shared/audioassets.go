package shared

// AudioAssets
// Files that are available as part of an audio asset
type AudioAssets struct {
	AlbumArt      *AudioAssetDetails `json:"album_art,omitempty"`
	CleanAudio    *AudioAssetDetails `json:"clean_audio,omitempty"`
	OriginalAudio *AudioAssetDetails `json:"original_audio,omitempty"`
	PreviewMp3    *AudioAssetDetails `json:"preview_mp3,omitempty"`
	PreviewOgg    *AudioAssetDetails `json:"preview_ogg,omitempty"`
	Waveform      *AudioAssetDetails `json:"waveform,omitempty"`
}
