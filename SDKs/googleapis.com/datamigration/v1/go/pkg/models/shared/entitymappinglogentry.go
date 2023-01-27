package shared

// EntityMappingLogEntry
// A single record of a rule which was used for a mapping.
type EntityMappingLogEntry struct {
	MappingComment *string `json:"mappingComment,omitempty"`
	RuleID         *string `json:"ruleId,omitempty"`
	RuleRevisionID *string `json:"ruleRevisionId,omitempty"`
}
