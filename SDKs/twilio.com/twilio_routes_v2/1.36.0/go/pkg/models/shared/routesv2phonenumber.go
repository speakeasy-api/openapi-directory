package shared

import (
	"time"
)

type RoutesV2PhoneNumber struct {
	AccountSid   *string    `json:"account_sid,omitempty"`
	DateCreated  *time.Time `json:"date_created,omitempty"`
	DateUpdated  *time.Time `json:"date_updated,omitempty"`
	FriendlyName *string    `json:"friendly_name,omitempty"`
	PhoneNumber  *string    `json:"phone_number,omitempty"`
	Sid          *string    `json:"sid,omitempty"`
	URL          *string    `json:"url,omitempty"`
	VoiceRegion  *string    `json:"voice_region,omitempty"`
}
