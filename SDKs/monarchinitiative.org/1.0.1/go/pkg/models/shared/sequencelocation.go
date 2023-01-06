package shared

type SequenceLocation struct {
	End    *SequencePosition `json:"end,omitempty"`
	Phase  *int64            `json:"phase,omitempty"`
	Score  *int64            `json:"score,omitempty"`
	Start  *SequencePosition `json:"start,omitempty"`
	Strand *int64            `json:"strand,omitempty"`
}
