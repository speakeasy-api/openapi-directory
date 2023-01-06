package shared

// Gender
// A person's gender.
type Gender struct {
	AddressMeAs    *string        `json:"addressMeAs,omitempty"`
	FormattedValue *string        `json:"formattedValue,omitempty"`
	Metadata       *FieldMetadata `json:"metadata,omitempty"`
	Value          *string        `json:"value,omitempty"`
}

// GenderInput
// A person's gender.
type GenderInput struct {
	AddressMeAs *string             `json:"addressMeAs,omitempty"`
	Metadata    *FieldMetadataInput `json:"metadata,omitempty"`
	Value       *string             `json:"value,omitempty"`
}
