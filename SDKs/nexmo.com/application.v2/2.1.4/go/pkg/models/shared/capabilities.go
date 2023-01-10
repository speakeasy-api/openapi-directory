package shared

// Capabilities
// Your application can use multiple products. This contains the configuration for each product. This replaces the application `type` from version 1 of the Application API.
type Capabilities struct {
	Meetings *MeetingsCapability    `json:"meetings,omitempty"`
	Messages *MessagesCapability    `json:"messages,omitempty"`
	Rtc      *RtcCapability         `json:"rtc,omitempty"`
	Vbc      map[string]interface{} `json:"vbc,omitempty"`
	Verify   *VerifyCapability      `json:"verify,omitempty"`
	Voice    *VoiceCapability       `json:"voice,omitempty"`
}
