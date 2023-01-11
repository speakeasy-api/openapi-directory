package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SynthesizeSpeechResponse
 * The message returned to the client by the `SynthesizeSpeech` method.
**/
public class SynthesizeSpeechResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audioContent")
    public String audioContent;
    public SynthesizeSpeechResponse withAudioContent(String audioContent) {
        this.audioContent = audioContent;
        return this;
    }
}