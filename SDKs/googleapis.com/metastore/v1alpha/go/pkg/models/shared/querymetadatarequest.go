package shared

// QueryMetadataRequest
// Request message for DataprocMetastore.QueryMetadata.
type QueryMetadataRequest struct {
	Query *string `json:"query,omitempty"`
}
