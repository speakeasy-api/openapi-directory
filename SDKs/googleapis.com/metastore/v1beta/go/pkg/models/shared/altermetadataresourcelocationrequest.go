package shared

// AlterMetadataResourceLocationRequest
// Request message for DataprocMetastore.AlterMetadataResourceLocation.
type AlterMetadataResourceLocationRequest struct {
	LocationURI  *string `json:"locationUri,omitempty"`
	ResourceName *string `json:"resourceName,omitempty"`
}
