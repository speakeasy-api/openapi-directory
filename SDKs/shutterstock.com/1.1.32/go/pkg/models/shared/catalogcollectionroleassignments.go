// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type CatalogCollectionRoleAssignmentsRoles struct {
	Editors []CatalogCollectionRole `json:"editors,omitempty"`
	Owners  []CatalogCollectionRole `json:"owners,omitempty"`
	Viewers []CatalogCollectionRole `json:"viewers,omitempty"`
}

// CatalogCollectionRoleAssignments - List of role assignments for a catalog collection
type CatalogCollectionRoleAssignments struct {
	CollectionID string                                `json:"collection_id"`
	Roles        CatalogCollectionRoleAssignmentsRoles `json:"roles"`
}
