package shared

// VoiceCall
// Voice Call
type VoiceCall struct {
	Direction *DirectionEnum   `json:"direction,omitempty"`
	From      *string          `json:"from,omitempty"`
	Network   *string          `json:"network,omitempty"`
	Product   ProductVoiceEnum `json:"product"`
	Status    *VoiceStatusEnum `json:"status,omitempty"`
	To        *string          `json:"to,omitempty"`
}
