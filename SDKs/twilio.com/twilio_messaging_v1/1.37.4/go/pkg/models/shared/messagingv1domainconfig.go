package shared

import (
	"time"
)

type MessagingV1DomainConfig struct {
	CallbackURL          *string    `json:"callback_url,omitempty"`
	ConfigSid            *string    `json:"config_sid,omitempty"`
	DateCreated          *time.Time `json:"date_created,omitempty"`
	DateUpdated          *time.Time `json:"date_updated,omitempty"`
	DomainSid            *string    `json:"domain_sid,omitempty"`
	FallbackURL          *string    `json:"fallback_url,omitempty"`
	MessagingServiceSids []string   `json:"messaging_service_sids,omitempty"`
	URL                  *string    `json:"url,omitempty"`
}
