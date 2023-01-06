package shared

type SimQuery struct {
	Ids           []Node     `json:"ids,omitempty"`
	NegatedIds    []Node     `json:"negated_ids,omitempty"`
	Reference     *TypedNode `json:"reference,omitempty"`
	TargetIds     [][]Node   `json:"target_ids,omitempty"`
	UnresolvedIds []string   `json:"unresolved_ids,omitempty"`
}
