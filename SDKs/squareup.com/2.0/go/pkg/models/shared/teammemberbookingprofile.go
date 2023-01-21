package shared

// TeamMemberBookingProfile
// The booking profile of a seller's team member, including the team member's ID, display name, description and whether the team member can be booked as a service provider.
type TeamMemberBookingProfile struct {
	Description     *string `json:"description,omitempty"`
	DisplayName     *string `json:"display_name,omitempty"`
	IsBookable      *bool   `json:"is_bookable,omitempty"`
	ProfileImageURL *string `json:"profile_image_url,omitempty"`
	TeamMemberID    *string `json:"team_member_id,omitempty"`
}
