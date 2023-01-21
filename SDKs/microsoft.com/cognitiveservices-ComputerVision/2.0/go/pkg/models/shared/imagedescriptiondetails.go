package shared

// ImageDescriptionDetails
// A collection of content tags, along with a list of captions sorted by confidence level, and image metadata.
type ImageDescriptionDetails struct {
	Captions []ImageCaption `json:"captions,omitempty"`
	Tags     []string       `json:"tags,omitempty"`
}
