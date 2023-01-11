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
    @JsonProperty("PerTagPerformance")
    public TagPerformance[] perTagPerformance;
    public IterationPerformance withPerTagPerformance(TagPerformance[] perTagPerformance) {
        this.perTagPerformance = perTagPerformance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Precision")
    public Double precision;
    public IterationPerformance withPrecision(Double precision) {
        this.precision = precision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrecisionStdDeviation")
    public Double precisionStdDeviation;
    public IterationPerformance withPrecisionStdDeviation(Double precisionStdDeviation) {
        this.precisionStdDeviation = precisionStdDeviation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Recall")
    public Double recall;
    public IterationPerformance withRecall(Double recall) {
        this.recall = recall;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecallStdDeviation")
    public Double recallStdDeviation;
    public IterationPerformance withRecallStdDeviation(Double recallStdDeviation) {
        this.recallStdDeviation = recallStdDeviation;
        return this;
    }
}