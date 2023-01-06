package shared

// ImageSizeDetails
// Image size information
type ImageSizeDetails struct {
	DisplayName  *string `json:"display_name,omitempty"`
	Dpi          *int64  `json:"dpi,omitempty"`
	FileSize     *int64  `json:"file_size,omitempty"`
	Format       *string `json:"format,omitempty"`
	Height       *int64  `json:"height,omitempty"`
	IsLicensable *bool   `json:"is_licensable,omitempty"`
	Width        *int64  `json:"width,omitempty"`
}
