// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GoogleCloudDialogflowCxV3beta1ResponseMessageText - The text response message.
type GoogleCloudDialogflowCxV3beta1ResponseMessageText struct {
	// Output only. Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
	AllowPlaybackInterruption *bool `json:"allowPlaybackInterruption,omitempty"`
	// Required. A collection of text responses.
	Text []string `json:"text,omitempty"`
}

// GoogleCloudDialogflowCxV3beta1ResponseMessageTextInput - The text response message.
type GoogleCloudDialogflowCxV3beta1ResponseMessageTextInput struct {
	// Required. A collection of text responses.
	Text []string `json:"text,omitempty"`
}
