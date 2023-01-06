package shared

// DescriptorsListResult
// List Descriptors results
type DescriptorsListResult struct {
	Data    []Descriptors `json:"data,omitempty"`
	Page    *int64        `json:"page,omitempty"`
	PerPage *int64        `json:"per_page,omitempty"`
}
