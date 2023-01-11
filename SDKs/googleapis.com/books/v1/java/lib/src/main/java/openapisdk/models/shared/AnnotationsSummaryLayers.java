package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AnnotationsSummaryLayers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedCharacterCount")
    public Integer allowedCharacterCount;
    public AnnotationsSummaryLayers withAllowedCharacterCount(Integer allowedCharacterCount) {
        this.allowedCharacterCount = allowedCharacterCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("layerId")
    public String layerId;
    public AnnotationsSummaryLayers withLayerId(String layerId) {
        this.layerId = layerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limitType")
    public String limitType;
    public AnnotationsSummaryLayers withLimitType(String limitType) {
        this.limitType = limitType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remainingCharacterCount")
    public Integer remainingCharacterCount;
    public AnnotationsSummaryLayers withRemainingCharacterCount(Integer remainingCharacterCount) {
        this.remainingCharacterCount = remainingCharacterCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated")
    public String updated;
    public AnnotationsSummaryLayers withUpdated(String updated) {
        this.updated = updated;
        return this;
    }
}