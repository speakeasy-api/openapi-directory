package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LearningCurve {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("epoch")
    public java.util.Map<String, Object> epoch;
    public LearningCurve withEpoch(java.util.Map<String, Object> epoch) {
        this.epoch = epoch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("epochResults")
    public java.util.Map<String, Object> epochResults;
    public LearningCurve withEpochResults(java.util.Map<String, Object> epochResults) {
        this.epochResults = epochResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricsData")
    public java.util.Map<String, Object> metricsData;
    public LearningCurve withMetricsData(java.util.Map<String, Object> metricsData) {
        this.metricsData = metricsData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public LearningCurve withObject(String object) {
        this.object = object;
        return this;
    }
}