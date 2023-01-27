package shared

// CompilationResult
// Represents the result of compiling a Dataform project.
type CompilationResult struct {
	CodeCompilationConfig *CodeCompilationConfig `json:"codeCompilationConfig,omitempty"`
	CompilationErrors     []CompilationError     `json:"compilationErrors,omitempty"`
	DataformCoreVersion   *string                `json:"dataformCoreVersion,omitempty"`
	GitCommitish          *string                `json:"gitCommitish,omitempty"`
	Name                  *string                `json:"name,omitempty"`
	ReleaseConfig         *string                `json:"releaseConfig,omitempty"`
	ResolvedGitCommitSha  *string                `json:"resolvedGitCommitSha,omitempty"`
	Workspace             *string                `json:"workspace,omitempty"`
}

// CompilationResultInput
// Represents the result of compiling a Dataform project.
type CompilationResultInput struct {
	CodeCompilationConfig *CodeCompilationConfig `json:"codeCompilationConfig,omitempty"`
	GitCommitish          *string                `json:"gitCommitish,omitempty"`
	ReleaseConfig         *string                `json:"releaseConfig,omitempty"`
	Workspace             *string                `json:"workspace,omitempty"`
}
