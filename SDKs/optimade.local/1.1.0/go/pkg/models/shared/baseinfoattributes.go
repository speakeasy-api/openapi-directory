package shared

// BaseInfoAttributes
// Attributes for Base URL Info endpoint
type BaseInfoAttributes struct {
	APIVersion           string                `json:"api_version"`
	AvailableAPIVersions []AvailableAPIVersion `json:"available_api_versions"`
	AvailableEndpoints   []string              `json:"available_endpoints"`
	EntryTypesByFormat   map[string][]string   `json:"entry_types_by_format"`
	Formats              []string              `json:"formats,omitempty"`
	IsIndex              *bool                 `json:"is_index,omitempty"`
}
