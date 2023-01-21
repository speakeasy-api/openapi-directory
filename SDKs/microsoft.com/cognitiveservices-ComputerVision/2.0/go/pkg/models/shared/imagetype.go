package shared

// ImageType
// An object providing possible image types and matching confidence levels.
type ImageType struct {
	ClipArtType     *int32 `json:"clipArtType,omitempty"`
	LineDrawingType *int32 `json:"lineDrawingType,omitempty"`
}
