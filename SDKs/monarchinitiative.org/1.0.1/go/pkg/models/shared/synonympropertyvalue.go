package shared

type SynonymPropertyValue struct {
	Pred  *string  `json:"pred,omitempty"`
	Val   *string  `json:"val,omitempty"`
	Xrefs []string `json:"xrefs,omitempty"`
}
