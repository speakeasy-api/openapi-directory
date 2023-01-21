package shared

// Category
// An object describing identified category.
type Category struct {
	Detail *CategoryDetail `json:"detail,omitempty"`
	Name   *string         `json:"name,omitempty"`
	Score  *float64        `json:"score,omitempty"`
}
