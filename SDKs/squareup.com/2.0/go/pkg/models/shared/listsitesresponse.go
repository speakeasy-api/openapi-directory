package shared

// ListSitesResponse
// Represents a `ListSites` response. The response can include either `sites` or `errors`.
type ListSitesResponse struct {
	Errors []Error `json:"errors,omitempty"`
	Sites  []Site  `json:"sites,omitempty"`
}
