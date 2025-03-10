package shared

// GoogleCloudDocumentaiV1DocumentRevision
// Contains past or forward revisions of this document.
type GoogleCloudDocumentaiV1DocumentRevision struct {
	Agent       *string                                             `json:"agent,omitempty"`
	CreateTime  *string                                             `json:"createTime,omitempty"`
	HumanReview *GoogleCloudDocumentaiV1DocumentRevisionHumanReview `json:"humanReview,omitempty"`
	ID          *string                                             `json:"id,omitempty"`
	Parent      []int32                                             `json:"parent,omitempty"`
	ParentIds   []string                                            `json:"parentIds,omitempty"`
	Processor   *string                                             `json:"processor,omitempty"`
}
