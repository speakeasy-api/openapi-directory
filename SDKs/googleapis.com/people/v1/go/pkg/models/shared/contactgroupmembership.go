package shared

// ContactGroupMembership
// A Google contact group membership.
type ContactGroupMembership struct {
	ContactGroupID           *string `json:"contactGroupId,omitempty"`
	ContactGroupResourceName *string `json:"contactGroupResourceName,omitempty"`
}

// ContactGroupMembershipInput
// A Google contact group membership.
type ContactGroupMembershipInput struct {
	ContactGroupResourceName *string `json:"contactGroupResourceName,omitempty"`
}
