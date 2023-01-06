package shared

// Asr
// ASR
type Asr struct {
	Direction *DirectionEnum `json:"direction,omitempty"`
	From      *string        `json:"from,omitempty"`
	Product   ProductAsrEnum `json:"product"`
	Status    *AsrStatusEnum `json:"status,omitempty"`
	To        *string        `json:"to,omitempty"`
}
