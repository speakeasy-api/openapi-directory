package shared

import (
	"time"
)

// Asset
// Secondary domain of a target
type Asset struct {
	Changed               *time.Time              `json:"changed,omitempty"`
	ChangedBy             *ChangedBy              `json:"changed_by,omitempty"`
	Cookies               []Cookies               `json:"cookies,omitempty"`
	Desc                  *string                 `json:"desc,omitempty"`
	Headers               []Headers               `json:"headers,omitempty"`
	Host                  *string                 `json:"host,omitempty"`
	ID                    *string                 `json:"id,omitempty"`
	Include               *bool                   `json:"include,omitempty"`
	Name                  *string                 `json:"name,omitempty"`
	Stack                 []string                `json:"stack,omitempty"`
	VerificationDate      *time.Time              `json:"verification_date,omitempty"`
	VerificationLastError *string                 `json:"verification_last_error,omitempty"`
	VerificationMethod    *VerificationMethodEnum `json:"verification_method,omitempty"`
	VerificationToken     *string                 `json:"verification_token,omitempty"`
	Verified              *bool                   `json:"verified,omitempty"`
}

// AssetInput
// Secondary domain of a target
type AssetInput struct {
	Cookies []Cookies `json:"cookies,omitempty"`
	Desc    *string   `json:"desc,omitempty"`
	Headers []Headers `json:"headers,omitempty"`
	Host    *string   `json:"host,omitempty"`
	Include *bool     `json:"include,omitempty"`
	Name    *string   `json:"name,omitempty"`
}
