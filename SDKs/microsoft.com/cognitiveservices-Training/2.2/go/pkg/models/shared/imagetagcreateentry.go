package shared

// ImageTagCreateEntry
// Entry associating a tag to an image.
type ImageTagCreateEntry struct {
	ImageID *string `json:"imageId,omitempty"`
	TagID   *string `json:"tagId,omitempty"`
}
