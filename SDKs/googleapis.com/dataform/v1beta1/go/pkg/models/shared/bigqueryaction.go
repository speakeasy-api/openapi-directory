package shared

// BigQueryAction
// Represents a workflow action that will run against BigQuery.
type BigQueryAction struct {
	SQLScript *string `json:"sqlScript,omitempty"`
}
