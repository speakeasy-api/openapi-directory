package shared

type PairwiseMatch struct {
	Lcs       *IcNode `json:"lcs,omitempty"`
	Match     *IcNode `json:"match,omitempty"`
	Reference *IcNode `json:"reference,omitempty"`
}
