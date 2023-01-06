package shared

import (
	"time"
)

// Site
// Main resource associated with a target
type Site struct {
	BasicAuth             *BasicAuth              `json:"basic_auth,omitempty"`
	Changed               *time.Time              `json:"changed,omitempty"`
	ChangedBy             *ChangedBy              `json:"changed_by,omitempty"`
	Cookies               []Cookies               `json:"cookies,omitempty"`
	Desc                  *string                 `json:"desc,omitempty"`
	FormLogin             []FormLogin             `json:"form_login,omitempty"`
	FormLoginCheckPattern *string                 `json:"form_login_check_pattern,omitempty"`
	FormLoginURL          *string                 `json:"form_login_url,omitempty"`
	HasBasicAuth          *bool                   `json:"has_basic_auth,omitempty"`
	HasFormLogin          *bool                   `json:"has_form_login,omitempty"`
	Headers               []Headers               `json:"headers,omitempty"`
	Host                  *string                 `json:"host,omitempty"`
	ID                    *string                 `json:"id,omitempty"`
	Name                  *string                 `json:"name,omitempty"`
	Stack                 []string                `json:"stack,omitempty"`
	URL                   *string                 `json:"url,omitempty"`
	VerificationDate      *time.Time              `json:"verification_date,omitempty"`
	VerificationLastError *string                 `json:"verification_last_error,omitempty"`
	VerificationMethod    *VerificationMethodEnum `json:"verification_method,omitempty"`
	VerificationToken     *string                 `json:"verification_token,omitempty"`
	Verified              *bool                   `json:"verified,omitempty"`
	Whitelist             []string                `json:"whitelist,omitempty"`
}

// SiteInput
// Main resource associated with a target
type SiteInput struct {
	BasicAuth             *BasicAuth  `json:"basic_auth,omitempty"`
	Cookies               []Cookies   `json:"cookies,omitempty"`
	Desc                  *string     `json:"desc,omitempty"`
	FormLogin             []FormLogin `json:"form_login,omitempty"`
	FormLoginCheckPattern *string     `json:"form_login_check_pattern,omitempty"`
	FormLoginURL          *string     `json:"form_login_url,omitempty"`
	HasBasicAuth          *bool       `json:"has_basic_auth,omitempty"`
	HasFormLogin          *bool       `json:"has_form_login,omitempty"`
	Headers               []Headers   `json:"headers,omitempty"`
	Name                  *string     `json:"name,omitempty"`
	URL                   *string     `json:"url,omitempty"`
	Whitelist             []string    `json:"whitelist,omitempty"`
}
