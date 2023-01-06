package shared

// Descriptors
// Information about a descriptor
type Descriptors struct {
	AverageRenderSpeed *float64      `json:"average_render_speed,omitempty"`
	Bands              []Bands       `json:"bands,omitempty"`
	ID                 *string       `json:"id,omitempty"`
	Instruments        []Instruments `json:"instruments,omitempty"`
	MaxTempo           *float64      `json:"max_tempo,omitempty"`
	MinTempo           *float64      `json:"min_tempo,omitempty"`
	Name               *string       `json:"name,omitempty"`
	Previews           []Preview     `json:"previews,omitempty"`
	Tags               []string      `json:"tags,omitempty"`
}
