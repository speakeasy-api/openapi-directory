package shared

type CompareInput struct {
	QueryIds     [][]string `json:"query_ids,omitempty"`
	ReferenceIds []string   `json:"reference_ids,omitempty"`
}
