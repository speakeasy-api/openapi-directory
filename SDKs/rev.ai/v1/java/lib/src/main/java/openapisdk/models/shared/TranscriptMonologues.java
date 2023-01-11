package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TranscriptMonologues {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("elements")
    public TranscriptMonologuesElements[] elements;
    public TranscriptMonologues withElements(TranscriptMonologuesElements[] elements) {
        this.elements = elements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("speaker")
    public Long speaker;
    public TranscriptMonologues withSpeaker(Long speaker) {
        this.speaker = speaker;
        return this;
    }
}