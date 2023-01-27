package shared

// DirectoryEntry
// Represents a single entry in a workspace directory.
type DirectoryEntry struct {
	Directory *string `json:"directory,omitempty"`
	File      *string `json:"file,omitempty"`
}
