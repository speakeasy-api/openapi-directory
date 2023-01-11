package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LongRunningRecognizeRequestInput
 * The top-level message sent by the client for the `LongRunningRecognize` method.
**/
public class LongRunningRecognizeRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio")
    public RecognitionAudio audio;
    public LongRunningRecognizeRequestInput withAudio(RecognitionAudio audio) {
        this.audio = audio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public RecognitionConfigInput config;
    public LongRunningRecognizeRequestInput withConfig(RecognitionConfigInput config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputConfig")
    public TranscriptOutputConfig outputConfig;
    public LongRunningRecognizeRequestInput withOutputConfig(TranscriptOutputConfig outputConfig) {
        this.outputConfig = outputConfig;
        return this;
    }
}