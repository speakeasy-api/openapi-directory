package shared

import (
	"time"
)

type Webhook struct {
	APIVersion *WebhookAPIVersionEnum `json:"api_version,omitempty"`
	Changed    *time.Time             `json:"changed,omitempty"`
	ChangedBy  *ChangedBy             `json:"changed_by,omitempty"`
	CheckCert  *bool                  `json:"check_cert,omitempty"`
	Created    *time.Time             `json:"created,omitempty"`
	CreatedBy  *ChangedBy             `json:"created_by,omitempty"`
	ID         *string                `json:"id,omitempty"`
	Name       *string                `json:"name,omitempty"`
	URL        string                 `json:"url"`
}

type WebhookInput struct {
	APIVersion *WebhookAPIVersionEnum `json:"api_version,omitempty"`
	CheckCert  *bool                  `json:"check_cert,omitempty"`
	Name       *string                `json:"name,omitempty"`
	URL        string                 `json:"url"`
}
