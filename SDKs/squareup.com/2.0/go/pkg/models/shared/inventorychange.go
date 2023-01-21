package shared

// InventoryChange
// Represents a single physical count, inventory, adjustment, or transfer
// that is part of the history of inventory changes for a particular
// [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) instance.
type InventoryChange struct {
	Adjustment        *InventoryAdjustment    `json:"adjustment,omitempty"`
	MeasurementUnit   *CatalogMeasurementUnit `json:"measurement_unit,omitempty"`
	MeasurementUnitID *string                 `json:"measurement_unit_id,omitempty"`
	PhysicalCount     *InventoryPhysicalCount `json:"physical_count,omitempty"`
	Transfer          *InventoryTransfer      `json:"transfer,omitempty"`
	Type              *string                 `json:"type,omitempty"`
}
