package shared

// OrganizationInfo
// Additional information stored for an organization.
type OrganizationInfo struct {
	Address          *PostalAddress `json:"address,omitempty"`
	PhoneNumber      *string        `json:"phoneNumber,omitempty"`
	RegisteredDomain *string        `json:"registeredDomain,omitempty"`
}

// OrganizationInfoInput
// Additional information stored for an organization.
type OrganizationInfoInput struct {
	Address *PostalAddress `json:"address,omitempty"`
}
