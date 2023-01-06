package shared

type OsPolicyResourceExecResourceExecInterpreterEnum string

const (
	OSPolicyResourceExecResourceExecInterpreterEnumInterpreterUnspecified OsPolicyResourceExecResourceExecInterpreterEnum = "INTERPRETER_UNSPECIFIED"
	OSPolicyResourceExecResourceExecInterpreterEnumNone                   OsPolicyResourceExecResourceExecInterpreterEnum = "NONE"
	OSPolicyResourceExecResourceExecInterpreterEnumShell                  OsPolicyResourceExecResourceExecInterpreterEnum = "SHELL"
	OSPolicyResourceExecResourceExecInterpreterEnumPowershell             OsPolicyResourceExecResourceExecInterpreterEnum = "POWERSHELL"
)

// OsPolicyResourceExecResourceExec
// A file or script to execute.
type OsPolicyResourceExecResourceExec struct {
	Args           []string                                         `json:"args,omitempty"`
	File           *OsPolicyResourceFile                            `json:"file,omitempty"`
	Interpreter    *OsPolicyResourceExecResourceExecInterpreterEnum `json:"interpreter,omitempty"`
	OutputFilePath *string                                          `json:"outputFilePath,omitempty"`
	Script         *string                                          `json:"script,omitempty"`
}
