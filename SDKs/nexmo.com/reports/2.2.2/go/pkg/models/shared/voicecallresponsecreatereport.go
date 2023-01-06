package shared

// VoiceCallResponseCreateReport
// Voice Call
type VoiceCallResponseCreateReport struct {
	Direction *DirectionEnum    `json:"direction,omitempty"`
	From      *string           `json:"from,omitempty"`
	Network   *string           `json:"network,omitempty"`
	Product   *ProductVoiceEnum `json:"product,omitempty"`
	Status    *VoiceStatusEnum  `json:"status,omitempty"`
	To        *string           `json:"to,omitempty"`
}
