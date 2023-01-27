package shared

// ContactCenterQuota
// Represents a quota for contact centers.
type ContactCenterQuota struct {
	ContactCenterCountLimit *int32 `json:"contactCenterCountLimit,omitempty"`
	ContactCenterCountSum   *int32 `json:"contactCenterCountSum,omitempty"`
}
