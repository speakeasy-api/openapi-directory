package shared

// InventoryPhysicalCount
// Represents the quantity of an item variation that is physically present
// at a specific location, verified by a seller or a seller's employee. For example,
// a physical count might come from an employee counting the item variations on
// hand or from syncing with an external system.
type InventoryPhysicalCount struct {
	CatalogObjectID   *string            `json:"catalog_object_id,omitempty"`
	CatalogObjectType *string            `json:"catalog_object_type,omitempty"`
	CreatedAt         *string            `json:"created_at,omitempty"`
	EmployeeID        *string            `json:"employee_id,omitempty"`
	ID                *string            `json:"id,omitempty"`
	LocationID        *string            `json:"location_id,omitempty"`
	OccurredAt        *string            `json:"occurred_at,omitempty"`
	Quantity          *string            `json:"quantity,omitempty"`
	ReferenceID       *string            `json:"reference_id,omitempty"`
	Source            *SourceApplication `json:"source,omitempty"`
	State             *string            `json:"state,omitempty"`
}
