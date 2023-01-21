package shared

// DisputeEvidenceFile
// A file to be uploaded as dispute evidence.
type DisputeEvidenceFile struct {
	Filename *string `json:"filename,omitempty"`
	Filetype *string `json:"filetype,omitempty"`
}
