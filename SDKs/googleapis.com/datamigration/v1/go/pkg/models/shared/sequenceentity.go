package shared

// SequenceEntity
// Sequence's parent is a schema.
type SequenceEntity struct {
	Cache          *string                `json:"cache,omitempty"`
	CustomFeatures map[string]interface{} `json:"customFeatures,omitempty"`
	Cycle          *bool                  `json:"cycle,omitempty"`
	Increment      *string                `json:"increment,omitempty"`
	MaxValue       *string                `json:"maxValue,omitempty"`
	MinValue       *string                `json:"minValue,omitempty"`
	StartValue     *string                `json:"startValue,omitempty"`
}
