package shared

// GoogleCloudRunV2CloudSQLInstance
// Represents a set of Cloud SQL instances. Each one will be available under /cloudsql/[instance]. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run.
type GoogleCloudRunV2CloudSQLInstance struct {
	Instances []string `json:"instances,omitempty"`
}
