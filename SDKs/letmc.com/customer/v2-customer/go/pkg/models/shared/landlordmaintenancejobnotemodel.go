package shared

import (
	"time"
)

// LandlordMaintenanceJobNoteModel
// Maintenance Job Note Helper Model:-
type LandlordMaintenanceJobNoteModel struct {
	CreatedAt    *time.Time `json:"CreatedAt,omitempty"`
	NoteContents *string    `json:"NoteContents,omitempty"`
	OID          *string    `json:"OID,omitempty"`
}
