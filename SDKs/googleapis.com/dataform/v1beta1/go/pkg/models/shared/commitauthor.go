package shared

// CommitAuthor
// Represents the author of a Git commit.
type CommitAuthor struct {
	EmailAddress *string `json:"emailAddress,omitempty"`
	Name         *string `json:"name,omitempty"`
}
