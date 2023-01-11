package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IterationPerformance
 * Represents the detailed performance data for a trained iteration
**/
public class IterationPerformance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("averagePrecision")
    public Float averagePrecision;
    public IterationPerformance withAveragePrecision(Float averagePrecision) {
        this.averagePrecision = averagePrecision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("perTagPerformance")
    public TagPerformance[] perTagPerformance;
    public IterationPerformance withPerTagPerformance(TagPerformance[] perTagPerformance) {
        this.perTagPerformance = perTagPerformance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("precision")
    public Float precision;
    public IterationPerformance withPrecision(Float precision) {
        this.precision = precision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("precisionStdDeviation")
    public Float precisionStdDeviation;
    public IterationPerformance withPrecisionStdDeviation(Float precisionStdDeviation) {
        this.precisionStdDeviation = precisionStdDeviation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recall")
    public Float recall;
    public IterationPerformance withRecall(Float recall) {
        this.recall = recall;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recallStdDeviation")
    public Float recallStdDeviation;
    public IterationPerformance withRecallStdDeviation(Float recallStdDeviation) {
        this.recallStdDeviation = recallStdDeviation;
        return this;
    }
}