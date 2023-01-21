package shared

// InventoryCount
// Represents Square-estimated quantity of items in a particular state at a
// particular seller location based on the known history of physical counts and
// inventory adjustments.
type InventoryCount struct {
	CalculatedAt      *string `json:"calculated_at,omitempty"`
	CatalogObjectID   *string `json:"catalog_object_id,omitempty"`
	CatalogObjectType *string `json:"catalog_object_type,omitempty"`
	IsEstimated       *bool   `json:"is_estimated,omitempty"`
	LocationID        *string `json:"location_id,omitempty"`
	Quantity          *string `json:"quantity,omitempty"`
	State             *string `json:"state,omitempty"`
}
