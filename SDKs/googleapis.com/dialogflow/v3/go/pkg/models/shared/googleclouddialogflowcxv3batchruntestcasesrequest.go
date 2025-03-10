// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GoogleCloudDialogflowCxV3BatchRunTestCasesRequest - The request message for TestCases.BatchRunTestCases.
type GoogleCloudDialogflowCxV3BatchRunTestCasesRequest struct {
	// Optional. If not set, draft environment is assumed. Format: `projects//locations//agents//environments/`.
	Environment *string `json:"environment,omitempty"`
	// Required. Format: `projects//locations//agents//testCases/`.
	TestCases []string `json:"testCases,omitempty"`
}
