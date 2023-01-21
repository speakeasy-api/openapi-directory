package shared

// CatalogObjectBatch
// A batch of catalog objects.
type CatalogObjectBatch struct {
	Objects []CatalogObject `json:"objects"`
}
