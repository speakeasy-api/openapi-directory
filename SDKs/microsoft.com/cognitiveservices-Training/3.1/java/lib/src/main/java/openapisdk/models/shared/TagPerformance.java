package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TagPerformance
 * Represents performance data for a particular tag in a trained iteration.
**/
public class TagPerformance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("averagePrecision")
    public Float averagePrecision;
    public TagPerformance withAveragePrecision(Float averagePrecision) {
        this.averagePrecision = averagePrecision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public TagPerformance withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TagPerformance withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("precision")
    public Float precision;
    public TagPerformance withPrecision(Float precision) {
        this.precision = precision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("precisionStdDeviation")
    public Float precisionStdDeviation;
    public TagPerformance withPrecisionStdDeviation(Float precisionStdDeviation) {
        this.precisionStdDeviation = precisionStdDeviation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recall")
    public Float recall;
    public TagPerformance withRecall(Float recall) {
        this.recall = recall;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recallStdDeviation")
    public Float recallStdDeviation;
    public TagPerformance withRecallStdDeviation(Float recallStdDeviation) {
        this.recallStdDeviation = recallStdDeviation;
        return this;
    }
}