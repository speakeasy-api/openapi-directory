package shared

// AudioAssetDetails
// Information about a file that is part of an audio asset
type AudioAssetDetails struct {
	FileSize *int64  `json:"file_size,omitempty"`
	URL      *string `json:"url,omitempty"`
}
