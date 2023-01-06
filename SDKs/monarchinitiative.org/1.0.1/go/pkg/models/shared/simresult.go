package shared

type SimResult struct {
	Matches  []SimMatch   `json:"matches,omitempty"`
	Metadata *SimMetadata `json:"metadata,omitempty"`
	Query    *SimQuery    `json:"query,omitempty"`
}
