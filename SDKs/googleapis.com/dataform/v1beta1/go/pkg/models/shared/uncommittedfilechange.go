package shared

type UncommittedFileChangeStateEnum string

const (
	UncommittedFileChangeStateEnumStateUnspecified UncommittedFileChangeStateEnum = "STATE_UNSPECIFIED"
	UncommittedFileChangeStateEnumAdded            UncommittedFileChangeStateEnum = "ADDED"
	UncommittedFileChangeStateEnumDeleted          UncommittedFileChangeStateEnum = "DELETED"
	UncommittedFileChangeStateEnumModified         UncommittedFileChangeStateEnum = "MODIFIED"
	UncommittedFileChangeStateEnumHasConflicts     UncommittedFileChangeStateEnum = "HAS_CONFLICTS"
)

// UncommittedFileChange
// Represents the Git state of a file with uncommitted changes.
type UncommittedFileChange struct {
	Path  *string                         `json:"path,omitempty"`
	State *UncommittedFileChangeStateEnum `json:"state,omitempty"`
}
