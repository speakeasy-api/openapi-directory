package shared

// Photo
// This contains the list of the fields that are common to all media returned.
type Photo struct {
	Height   *int64  `json:"height,omitempty"`
	MediaKey *string `json:"media_key,omitempty"`
	Width    *int64  `json:"width,omitempty"`
}
