package shared

// CodeCompilationConfig
// Configures various aspects of Dataform code compilation.
type CodeCompilationConfig struct {
	AssertionSchema *string           `json:"assertionSchema,omitempty"`
	DatabaseSuffix  *string           `json:"databaseSuffix,omitempty"`
	DefaultDatabase *string           `json:"defaultDatabase,omitempty"`
	DefaultLocation *string           `json:"defaultLocation,omitempty"`
	DefaultSchema   *string           `json:"defaultSchema,omitempty"`
	SchemaSuffix    *string           `json:"schemaSuffix,omitempty"`
	TablePrefix     *string           `json:"tablePrefix,omitempty"`
	Vars            map[string]string `json:"vars,omitempty"`
}
