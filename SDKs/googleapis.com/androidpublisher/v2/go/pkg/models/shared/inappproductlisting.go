package shared

// InAppProductListing
// The language of the localized data, as defined by BCP 47. i.e.: "en-US", "en-GB".
type InAppProductListing struct {
	Description *string `json:"description,omitempty"`
	Title       *string `json:"title,omitempty"`
}
