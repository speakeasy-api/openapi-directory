package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TagPerformance
 * Represents performance data for a particular tag in a trained iteration
**/
public class TagPerformance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public TagPerformance withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public TagPerformance withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Precision")
    public Double precision;
    public TagPerformance withPrecision(Double precision) {
        this.precision = precision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrecisionStdDeviation")
    public Double precisionStdDeviation;
    public TagPerformance withPrecisionStdDeviation(Double precisionStdDeviation) {
        this.precisionStdDeviation = precisionStdDeviation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Recall")
    public Double recall;
    public TagPerformance withRecall(Double recall) {
        this.recall = recall;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecallStdDeviation")
    public Double recallStdDeviation;
    public TagPerformance withRecallStdDeviation(Double recallStdDeviation) {
        this.recallStdDeviation = recallStdDeviation;
        return this;
    }
}