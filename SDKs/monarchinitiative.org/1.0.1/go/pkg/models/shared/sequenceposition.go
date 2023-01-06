package shared

type SequencePosition struct {
	Position  *int64  `json:"position,omitempty"`
	Reference *string `json:"reference,omitempty"`
}
