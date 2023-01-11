package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AnnotationLayerSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedCharacterCount")
    public Integer allowedCharacterCount;
    public AnnotationLayerSummary withAllowedCharacterCount(Integer allowedCharacterCount) {
        this.allowedCharacterCount = allowedCharacterCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limitType")
    public String limitType;
    public AnnotationLayerSummary withLimitType(String limitType) {
        this.limitType = limitType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remainingCharacterCount")
    public Integer remainingCharacterCount;
    public AnnotationLayerSummary withRemainingCharacterCount(Integer remainingCharacterCount) {
        this.remainingCharacterCount = remainingCharacterCount;
        return this;
    }
}