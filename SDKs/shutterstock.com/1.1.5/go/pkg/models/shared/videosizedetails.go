package shared

// VideoSizeDetails
// Video asset information
type VideoSizeDetails struct {
	DisplayName  *string  `json:"display_name,omitempty"`
	FileSize     *int64   `json:"file_size,omitempty"`
	Format       *string  `json:"format,omitempty"`
	Fps          *float64 `json:"fps,omitempty"`
	Height       *int64   `json:"height,omitempty"`
	IsLicensable *bool    `json:"is_licensable,omitempty"`
	Width        *int64   `json:"width,omitempty"`
}
