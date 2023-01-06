package shared

// CustomSizeDimensions
// A custom height or a custom width to resize the image to, but not both (experimental)
type CustomSizeDimensions struct {
	Height *int64 `json:"height,omitempty"`
	Width  *int64 `json:"width,omitempty"`
}
