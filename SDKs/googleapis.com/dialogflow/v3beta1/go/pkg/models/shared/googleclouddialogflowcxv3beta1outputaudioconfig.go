// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// GoogleCloudDialogflowCxV3beta1OutputAudioConfigAudioEncodingEnum - Required. Audio encoding of the synthesized audio content.
type GoogleCloudDialogflowCxV3beta1OutputAudioConfigAudioEncodingEnum string

const (
	GoogleCloudDialogflowCxV3beta1OutputAudioConfigAudioEncodingEnumOutputAudioEncodingUnspecified GoogleCloudDialogflowCxV3beta1OutputAudioConfigAudioEncodingEnum = "OUTPUT_AUDIO_ENCODING_UNSPECIFIED"
	GoogleCloudDialogflowCxV3beta1OutputAudioConfigAudioEncodingEnumOutputAudioEncodingLinear16    GoogleCloudDialogflowCxV3beta1OutputAudioConfigAudioEncodingEnum = "OUTPUT_AUDIO_ENCODING_LINEAR_16"
	GoogleCloudDialogflowCxV3beta1OutputAudioConfigAudioEncodingEnumOutputAudioEncodingMp3         GoogleCloudDialogflowCxV3beta1OutputAudioConfigAudioEncodingEnum = "OUTPUT_AUDIO_ENCODING_MP3"
	GoogleCloudDialogflowCxV3beta1OutputAudioConfigAudioEncodingEnumOutputAudioEncodingMp364Kbps   GoogleCloudDialogflowCxV3beta1OutputAudioConfigAudioEncodingEnum = "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS"
	GoogleCloudDialogflowCxV3beta1OutputAudioConfigAudioEncodingEnumOutputAudioEncodingOggOpus     GoogleCloudDialogflowCxV3beta1OutputAudioConfigAudioEncodingEnum = "OUTPUT_AUDIO_ENCODING_OGG_OPUS"
	GoogleCloudDialogflowCxV3beta1OutputAudioConfigAudioEncodingEnumOutputAudioEncodingMulaw       GoogleCloudDialogflowCxV3beta1OutputAudioConfigAudioEncodingEnum = "OUTPUT_AUDIO_ENCODING_MULAW"
)

func (e GoogleCloudDialogflowCxV3beta1OutputAudioConfigAudioEncodingEnum) ToPointer() *GoogleCloudDialogflowCxV3beta1OutputAudioConfigAudioEncodingEnum {
	return &e
}

func (e *GoogleCloudDialogflowCxV3beta1OutputAudioConfigAudioEncodingEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "OUTPUT_AUDIO_ENCODING_UNSPECIFIED":
		fallthrough
	case "OUTPUT_AUDIO_ENCODING_LINEAR_16":
		fallthrough
	case "OUTPUT_AUDIO_ENCODING_MP3":
		fallthrough
	case "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS":
		fallthrough
	case "OUTPUT_AUDIO_ENCODING_OGG_OPUS":
		fallthrough
	case "OUTPUT_AUDIO_ENCODING_MULAW":
		*e = GoogleCloudDialogflowCxV3beta1OutputAudioConfigAudioEncodingEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GoogleCloudDialogflowCxV3beta1OutputAudioConfigAudioEncodingEnum: %v", v)
	}
}

// GoogleCloudDialogflowCxV3beta1OutputAudioConfig - Instructs the speech synthesizer how to generate the output audio content.
type GoogleCloudDialogflowCxV3beta1OutputAudioConfig struct {
	// Required. Audio encoding of the synthesized audio content.
	AudioEncoding *GoogleCloudDialogflowCxV3beta1OutputAudioConfigAudioEncodingEnum `json:"audioEncoding,omitempty"`
	// Optional. The synthesis sample rate (in hertz) for this audio. If not provided, then the synthesizer will use the default sample rate based on the audio encoding. If this is different from the voice's natural sample rate, then the synthesizer will honor this request by converting to the desired sample rate (which might result in worse audio quality).
	SampleRateHertz *int `json:"sampleRateHertz,omitempty"`
	// Configuration of how speech should be synthesized.
	SynthesizeSpeechConfig *GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig `json:"synthesizeSpeechConfig,omitempty"`
}
