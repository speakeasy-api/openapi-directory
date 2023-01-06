package shared

type CombinedAge struct {
	Eighteen24   *Eighteen24   `json:"18 - 24,omitempty"`
	TwentyFive34 *TwentyFive34 `json:"25 - 34,omitempty"`
	ThirtyFive44 *ThirtyFive44 `json:"35 - 44,omitempty"`
}
