package shared

// CreateTeamMemberRequest
// Represents a create request for a `TeamMember` object.
type CreateTeamMemberRequest struct {
	IdempotencyKey *string     `json:"idempotency_key,omitempty"`
	TeamMember     *TeamMember `json:"team_member,omitempty"`
}
