package shared

// CatalogV1ID
// A Square API V1 identifier of an item, including the object ID and its associated location ID.
type CatalogV1ID struct {
	CatalogV1ID *string `json:"catalog_v1_id,omitempty"`
	LocationID  *string `json:"location_id,omitempty"`
}
