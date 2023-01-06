package shared

// UserDetails
// User details
type UserDetails struct {
	ContributorID       *string  `json:"contributor_id,omitempty"`
	CustomerID          *string  `json:"customer_id,omitempty"`
	Email               *string  `json:"email,omitempty"`
	FirstName           *string  `json:"first_name,omitempty"`
	FullName            *string  `json:"full_name,omitempty"`
	ID                  *string  `json:"id,omitempty"`
	IsPremier           *bool    `json:"is_premier,omitempty"`
	IsPremierParent     *bool    `json:"is_premier_parent,omitempty"`
	Language            *string  `json:"language,omitempty"`
	LastName            *string  `json:"last_name,omitempty"`
	OnlyEnhancedLicense *bool    `json:"only_enhanced_license,omitempty"`
	OnlySensitiveUse    *bool    `json:"only_sensitive_use,omitempty"`
	OrganizationID      *string  `json:"organization_id,omitempty"`
	PremierPermissions  []string `json:"premier_permissions,omitempty"`
	Username            *string  `json:"username,omitempty"`
}
