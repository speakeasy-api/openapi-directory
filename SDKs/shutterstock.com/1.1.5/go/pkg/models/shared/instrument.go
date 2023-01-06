package shared

// Instrument
// Information about an musical instrument
type Instrument struct {
	ID       *string   `json:"id,omitempty"`
	Name     *string   `json:"name,omitempty"`
	Previews []Preview `json:"previews,omitempty"`
	Tags     []string  `json:"tags,omitempty"`
}
