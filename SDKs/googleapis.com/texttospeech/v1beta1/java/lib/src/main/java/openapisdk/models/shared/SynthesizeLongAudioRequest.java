package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SynthesizeLongAudioRequest
 * The top-level message sent by the client for the `SynthesizeLongAudio` method.
**/
public class SynthesizeLongAudioRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audioConfig")
    public AudioConfig audioConfig;
    public SynthesizeLongAudioRequest withAudioConfig(AudioConfig audioConfig) {
        this.audioConfig = audioConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("input")
    public SynthesisInput input;
    public SynthesizeLongAudioRequest withInput(SynthesisInput input) {
        this.input = input;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputGcsUri")
    public String outputGcsUri;
    public SynthesizeLongAudioRequest withOutputGcsUri(String outputGcsUri) {
        this.outputGcsUri = outputGcsUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice")
    public VoiceSelectionParams voice;
    public SynthesizeLongAudioRequest withVoice(VoiceSelectionParams voice) {
        this.voice = voice;
        return this;
    }
}