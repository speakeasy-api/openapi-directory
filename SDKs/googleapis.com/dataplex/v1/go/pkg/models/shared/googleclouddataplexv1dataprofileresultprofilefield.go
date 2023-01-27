package shared

// GoogleCloudDataplexV1DataProfileResultProfileField
// A field within a table.
type GoogleCloudDataplexV1DataProfileResultProfileField struct {
	Mode    *string                                                        `json:"mode,omitempty"`
	Name    *string                                                        `json:"name,omitempty"`
	Profile *GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo `json:"profile,omitempty"`
	Type    *string                                                        `json:"type,omitempty"`
}
