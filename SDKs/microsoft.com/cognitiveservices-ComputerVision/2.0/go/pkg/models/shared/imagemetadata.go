package shared

// ImageMetadata
// Image metadata.
type ImageMetadata struct {
	Format *string `json:"format,omitempty"`
	Height *int32  `json:"height,omitempty"`
	Width  *int32  `json:"width,omitempty"`
}
