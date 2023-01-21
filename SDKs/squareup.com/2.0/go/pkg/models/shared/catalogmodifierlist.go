package shared

// CatalogModifierList
// A list of modifiers applicable to items at the time of sale.
//
// For example, a "Condiments" modifier list applicable to a "Hot Dog" item
// may contain "Ketchup", "Mustard", and "Relish" modifiers.
// Use the `selection_type` field to specify whether or not multiple selections from
// the modifier list are allowed.
type CatalogModifierList struct {
	Modifiers     []CatalogObject `json:"modifiers,omitempty"`
	Name          *string         `json:"name,omitempty"`
	Ordinal       *int64          `json:"ordinal,omitempty"`
	SelectionType *string         `json:"selection_type,omitempty"`
}
