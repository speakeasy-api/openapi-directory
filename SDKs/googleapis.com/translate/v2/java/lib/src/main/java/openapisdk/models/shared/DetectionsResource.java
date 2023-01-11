package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DetectionsResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidence")
    public Float confidence;
    public DetectionsResource withConfidence(Float confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isReliable")
    public Boolean isReliable;
    public DetectionsResource withIsReliable(Boolean isReliable) {
        this.isReliable = isReliable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public DetectionsResource withLanguage(String language) {
        this.language = language;
        return this;
    }
}