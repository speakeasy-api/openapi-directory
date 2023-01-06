package shared

// ImageRegionCreateEntry
// Entry associating a region to an image.
type ImageRegionCreateEntry struct {
	Height  float32 `json:"height"`
	ImageID string  `json:"imageId"`
	Left    float32 `json:"left"`
	TagID   string  `json:"tagId"`
	Top     float32 `json:"top"`
	Width   float32 `json:"width"`
}
