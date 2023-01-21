package shared

// CatalogObjectReference
// A reference to a Catalog object at a specific version. In general this is
// used as an entry point into a graph of catalog objects, where the objects exist
// at a specific version.
type CatalogObjectReference struct {
	CatalogVersion *int64  `json:"catalog_version,omitempty"`
	ObjectID       *string `json:"object_id,omitempty"`
}
