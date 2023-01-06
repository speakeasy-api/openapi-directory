package shared

// AsrResponseCreateReport
// ASR
type AsrResponseCreateReport struct {
	Direction *DirectionEnum  `json:"direction,omitempty"`
	From      *string         `json:"from,omitempty"`
	Product   *ProductAsrEnum `json:"product,omitempty"`
	Status    *AsrStatusEnum  `json:"status,omitempty"`
	To        *string         `json:"to,omitempty"`
}
