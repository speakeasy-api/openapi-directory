package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TranscriptMonologuesElements {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidence")
    public Double confidence;
    public TranscriptMonologuesElements withConfidence(Double confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ts")
    public Double ts;
    public TranscriptMonologuesElements withTs(Double ts) {
        this.ts = ts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ts_end")
    public Double tsEnd;
    public TranscriptMonologuesElements withTsEnd(Double tsEnd) {
        this.tsEnd = tsEnd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public TranscriptMonologuesElementsTypeEnum type;
    public TranscriptMonologuesElements withType(TranscriptMonologuesElementsTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public TranscriptMonologuesElements withValue(String value) {
        this.value = value;
        return this;
    }
}