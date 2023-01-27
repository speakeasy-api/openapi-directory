package shared

// PullGitCommitsRequest
// `PullGitCommits` request message.
type PullGitCommitsRequest struct {
	Author       *CommitAuthor `json:"author,omitempty"`
	RemoteBranch *string       `json:"remoteBranch,omitempty"`
}
