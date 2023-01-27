package shared

// ListCompilationResultsResponse
// `ListCompilationResults` response message.
type ListCompilationResultsResponse struct {
	CompilationResults []CompilationResult `json:"compilationResults,omitempty"`
	NextPageToken      *string             `json:"nextPageToken,omitempty"`
	Unreachable        []string            `json:"unreachable,omitempty"`
}
