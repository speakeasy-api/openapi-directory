// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// EnterprisePullRequestOverview - Response
type EnterprisePullRequestOverview struct {
	MergeablePulls   int64 `json:"mergeable_pulls"`
	MergedPulls      int64 `json:"merged_pulls"`
	TotalPulls       int64 `json:"total_pulls"`
	UnmergeablePulls int64 `json:"unmergeable_pulls"`
}
