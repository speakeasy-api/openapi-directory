package shared

// InvocationConfig
// Includes various configuration options for a workflow invocation. If both `included_targets` and `included_tags` are unset, all actions will be included.
type InvocationConfig struct {
	FullyRefreshIncrementalTablesEnabled *bool    `json:"fullyRefreshIncrementalTablesEnabled,omitempty"`
	IncludedTags                         []string `json:"includedTags,omitempty"`
	IncludedTargets                      []Target `json:"includedTargets,omitempty"`
	TransitiveDependenciesIncluded       *bool    `json:"transitiveDependenciesIncluded,omitempty"`
	TransitiveDependentsIncluded         *bool    `json:"transitiveDependentsIncluded,omitempty"`
}
