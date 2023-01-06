package shared

import (
	"time"
)

type MessagingV1DomainCertV4 struct {
	CertificateSid *string    `json:"certificate_sid,omitempty"`
	DateCreated    *time.Time `json:"date_created,omitempty"`
	DateExpires    *time.Time `json:"date_expires,omitempty"`
	DateUpdated    *time.Time `json:"date_updated,omitempty"`
	DomainName     *string    `json:"domain_name,omitempty"`
	DomainSid      *string    `json:"domain_sid,omitempty"`
	URL            *string    `json:"url,omitempty"`
	Validated      *bool      `json:"validated,omitempty"`
}
