package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecognizeRequestInput
 * The top-level message sent by the client for the `Recognize` method.
**/
public class RecognizeRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio")
    public RecognitionAudio audio;
    public RecognizeRequestInput withAudio(RecognitionAudio audio) {
        this.audio = audio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public RecognitionConfigInput config;
    public RecognizeRequestInput withConfig(RecognitionConfigInput config) {
        this.config = config;
        return this;
    }
}