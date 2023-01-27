package shared

// QueryOverride
// QueryOverride. Query message defines query override for HTTP targets.
type QueryOverride struct {
	QueryParams *string `json:"queryParams,omitempty"`
}
