// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GooglePrivacyDlpV2InspectResult - All the findings for a single scanned item.
type GooglePrivacyDlpV2InspectResult struct {
	// List of findings for an item.
	Findings []GooglePrivacyDlpV2Finding `json:"findings,omitempty"`
	// If true, then this item might have more findings than were returned, and the findings returned are an arbitrary subset of all findings. The findings list might be truncated because the input items were too large, or because the server reached the maximum amount of resources allowed for a single API call. For best results, divide the input into smaller batches.
	FindingsTruncated *bool `json:"findingsTruncated,omitempty"`
}
