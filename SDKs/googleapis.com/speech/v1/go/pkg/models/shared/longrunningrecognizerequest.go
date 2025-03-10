// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// LongRunningRecognizeRequestInput - The top-level message sent by the client for the `LongRunningRecognize` method.
type LongRunningRecognizeRequestInput struct {
	// Contains audio data in the encoding specified in the `RecognitionConfig`. Either `content` or `uri` must be supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT. See [content limits](https://cloud.google.com/speech-to-text/quotas#content).
	Audio *RecognitionAudio `json:"audio,omitempty"`
	// Provides information to the recognizer that specifies how to process the request.
	Config *RecognitionConfigInput `json:"config,omitempty"`
	// Specifies an optional destination for the recognition results.
	OutputConfig *TranscriptOutputConfig `json:"outputConfig,omitempty"`
}
