package shared

// ResourceFilter
// Message describing resource filters
type ResourceFilter struct {
	GceInstanceFilter  *GceInstanceFilter `json:"gceInstanceFilter,omitempty"`
	InclusionLabels    map[string]string  `json:"inclusionLabels,omitempty"`
	ResourceIDPatterns []string           `json:"resourceIdPatterns,omitempty"`
	Scopes             []string           `json:"scopes,omitempty"`
}
