// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GoogleCloudContactcenterinsightsV1GcsSource - A Cloud Storage source of conversation data.
type GoogleCloudContactcenterinsightsV1GcsSource struct {
	// Cloud Storage URI that points to a file that contains the conversation audio.
	AudioURI *string `json:"audioUri,omitempty"`
	// Immutable. Cloud Storage URI that points to a file that contains the conversation transcript.
	TranscriptURI *string `json:"transcriptUri,omitempty"`
}
