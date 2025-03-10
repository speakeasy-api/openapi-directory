// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GoogleCloudDialogflowCxV3beta1IntentCoverageIntent - The agent's intent.
type GoogleCloudDialogflowCxV3beta1IntentCoverageIntent struct {
	// Whether the intent is covered by at least one of the agent's test cases.
	Covered *bool `json:"covered,omitempty"`
	// The intent full resource name
	Intent *string `json:"intent,omitempty"`
}
