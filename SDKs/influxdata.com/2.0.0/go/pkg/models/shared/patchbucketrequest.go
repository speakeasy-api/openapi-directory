package shared

// PatchBucketRequest
// Updates to an existing bucket resource.
type PatchBucketRequest struct {
	Description    *string              `json:"description,omitempty"`
	Name           *string              `json:"name,omitempty"`
	RetentionRules []PatchRetentionRule `json:"retentionRules,omitempty"`
}
