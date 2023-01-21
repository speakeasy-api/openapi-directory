package shared

// StandardUnitDescriptionGroup
// Group of standard measurement units.
type StandardUnitDescriptionGroup struct {
	LanguageCode             *string                   `json:"language_code,omitempty"`
	StandardUnitDescriptions []StandardUnitDescription `json:"standard_unit_descriptions,omitempty"`
}
