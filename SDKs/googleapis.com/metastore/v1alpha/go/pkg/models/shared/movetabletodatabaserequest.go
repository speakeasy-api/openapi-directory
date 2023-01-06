package shared

// MoveTableToDatabaseRequest
// Request message for DataprocMetastore.MoveTableToDatabase.
type MoveTableToDatabaseRequest struct {
	DbName            *string `json:"dbName,omitempty"`
	DestinationDbName *string `json:"destinationDbName,omitempty"`
	TableName         *string `json:"tableName,omitempty"`
}
