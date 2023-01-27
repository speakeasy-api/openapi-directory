package shared

// EntityMapping
// Details of the mappings of a database entity.
type EntityMapping struct {
	DraftEntity  *string                 `json:"draftEntity,omitempty"`
	MappingLog   []EntityMappingLogEntry `json:"mappingLog,omitempty"`
	SourceEntity *string                 `json:"sourceEntity,omitempty"`
}
