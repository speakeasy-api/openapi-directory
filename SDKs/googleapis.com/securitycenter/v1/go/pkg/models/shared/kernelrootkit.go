package shared

// KernelRootkit
// Kernel mode rootkit signatures.
type KernelRootkit struct {
	Name                               *string `json:"name,omitempty"`
	UnexpectedCodeModification         *bool   `json:"unexpectedCodeModification,omitempty"`
	UnexpectedFtraceHandler            *bool   `json:"unexpectedFtraceHandler,omitempty"`
	UnexpectedInterruptHandler         *bool   `json:"unexpectedInterruptHandler,omitempty"`
	UnexpectedKernelCodePages          *bool   `json:"unexpectedKernelCodePages,omitempty"`
	UnexpectedKprobeHandler            *bool   `json:"unexpectedKprobeHandler,omitempty"`
	UnexpectedProcessesInRunqueue      *bool   `json:"unexpectedProcessesInRunqueue,omitempty"`
	UnexpectedReadOnlyDataModification *bool   `json:"unexpectedReadOnlyDataModification,omitempty"`
	UnexpectedSystemCallHandler        *bool   `json:"unexpectedSystemCallHandler,omitempty"`
}
