// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GoogleCloudPolicyanalyzerV1QueryActivityResponse - Response to the `QueryActivity` method.
type GoogleCloudPolicyanalyzerV1QueryActivityResponse struct {
	// The set of activities that match the filter included in the request.
	Activities []GoogleCloudPolicyanalyzerV1Activity `json:"activities,omitempty"`
	// If there might be more results than those appearing in this response, then `nextPageToken` is included. To get the next set of results, call this method again using the value of `nextPageToken` as `pageToken`.
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
