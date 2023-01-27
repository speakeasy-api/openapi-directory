package shared

// GoogleCloudDatacatalogV1SQLDatabaseSystemSpec
// Specification that applies to entries that are part `SQL_DATABASE` system (user_specified_type)
type GoogleCloudDatacatalogV1SQLDatabaseSystemSpec struct {
	DatabaseVersion *string `json:"databaseVersion,omitempty"`
	InstanceHost    *string `json:"instanceHost,omitempty"`
	SQLEngine       *string `json:"sqlEngine,omitempty"`
}
