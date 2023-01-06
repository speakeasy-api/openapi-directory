package shared

import (
	"time"
)

// StoryCollaborator1
// Base model for all types
type StoryCollaborator1 struct {
	CreatedAt *time.Time `json:"created_at,omitempty"`
	CreatedBy *string    `json:"created_by,omitempty"`
	ID        *string    `json:"id,omitempty"`
	UpdatedAt *time.Time `json:"updated_at,omitempty"`
	UpdatedBy *string    `json:"updated_by,omitempty"`
}
