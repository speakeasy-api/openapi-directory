package shared

// Occupation
// A person's occupation.
type Occupation struct {
	Metadata *FieldMetadata `json:"metadata,omitempty"`
	Value    *string        `json:"value,omitempty"`
}

// OccupationInput
// A person's occupation.
type OccupationInput struct {
	Metadata *FieldMetadataInput `json:"metadata,omitempty"`
	Value    *string             `json:"value,omitempty"`
}
