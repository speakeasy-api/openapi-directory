// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// BatchUpsertCatalogObjectsResponse - Success
type BatchUpsertCatalogObjectsResponse struct {
	// Any errors that occurred during the request.
	Errors []Error `json:"errors,omitempty"`
	// The mapping between client and server IDs for this upsert.
	IDMappings []CatalogIDMapping `json:"id_mappings,omitempty"`
	// The created successfully created CatalogObjects.
	Objects []CatalogObject `json:"objects,omitempty"`
	// The database [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) of this update in RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z".
	UpdatedAt *string `json:"updated_at,omitempty"`
}
