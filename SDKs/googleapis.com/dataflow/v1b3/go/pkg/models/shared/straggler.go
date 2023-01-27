package shared

// Straggler
// Information for a straggler.
type Straggler struct {
	BatchStraggler     *StragglerInfo          `json:"batchStraggler,omitempty"`
	StreamingStraggler *StreamingStragglerInfo `json:"streamingStraggler,omitempty"`
}
