package shared

// TeamMemberAssignedLocations
// An object that represents a team member's assignment to locations.
type TeamMemberAssignedLocations struct {
	AssignmentType *string  `json:"assignment_type,omitempty"`
	LocationIds    []string `json:"location_ids,omitempty"`
}
