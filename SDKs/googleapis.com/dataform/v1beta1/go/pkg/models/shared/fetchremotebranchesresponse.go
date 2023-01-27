package shared

// FetchRemoteBranchesResponse
// `FetchRemoteBranches` response message.
type FetchRemoteBranchesResponse struct {
	Branches []string `json:"branches,omitempty"`
}
