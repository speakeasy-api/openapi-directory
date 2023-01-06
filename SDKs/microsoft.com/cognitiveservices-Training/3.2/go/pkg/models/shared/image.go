package shared

import (
	"time"
)

// Image
// Image model to be sent as JSON.
type Image struct {
	Created          *time.Time    `json:"created,omitempty"`
	Height           *int32        `json:"height,omitempty"`
	ID               *string       `json:"id,omitempty"`
	OriginalImageURI *string       `json:"originalImageUri,omitempty"`
	Regions          []ImageRegion `json:"regions,omitempty"`
	ResizedImageURI  *string       `json:"resizedImageUri,omitempty"`
	Tags             []ImageTag    `json:"tags,omitempty"`
	ThumbnailURI     *string       `json:"thumbnailUri,omitempty"`
	Width            *int32        `json:"width,omitempty"`
}
