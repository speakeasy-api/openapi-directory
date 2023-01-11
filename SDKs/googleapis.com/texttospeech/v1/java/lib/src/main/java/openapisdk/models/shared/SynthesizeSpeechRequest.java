package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SynthesizeSpeechRequest
 * The top-level message sent by the client for the `SynthesizeSpeech` method.
**/
public class SynthesizeSpeechRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audioConfig")
    public AudioConfig audioConfig;
    public SynthesizeSpeechRequest withAudioConfig(AudioConfig audioConfig) {
        this.audioConfig = audioConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("input")
    public SynthesisInput input;
    public SynthesizeSpeechRequest withInput(SynthesisInput input) {
        this.input = input;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice")
    public VoiceSelectionParams voice;
    public SynthesizeSpeechRequest withVoice(VoiceSelectionParams voice) {
        this.voice = voice;
        return this;
    }
}