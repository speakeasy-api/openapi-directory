package shared

// InputFile
// An input file.
type InputFile struct {
	GcsSource *GcsInputSource `json:"gcsSource,omitempty"`
	Usage     *string         `json:"usage,omitempty"`
}
