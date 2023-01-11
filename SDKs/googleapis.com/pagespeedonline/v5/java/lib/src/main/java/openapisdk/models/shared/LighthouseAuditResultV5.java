package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LighthouseAuditResultV5 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public LighthouseAuditResultV5 withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public java.util.Map<String, Object> details;
    public LighthouseAuditResultV5 withDetails(java.util.Map<String, Object> details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayValue")
    public String displayValue;
    public LighthouseAuditResultV5 withDisplayValue(String displayValue) {
        this.displayValue = displayValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public LighthouseAuditResultV5 withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explanation")
    public String explanation;
    public LighthouseAuditResultV5 withExplanation(String explanation) {
        this.explanation = explanation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public LighthouseAuditResultV5 withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numericUnit")
    public String numericUnit;
    public LighthouseAuditResultV5 withNumericUnit(String numericUnit) {
        this.numericUnit = numericUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numericValue")
    public Double numericValue;
    public LighthouseAuditResultV5 withNumericValue(Double numericValue) {
        this.numericValue = numericValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Object score;
    public LighthouseAuditResultV5 withScore(Object score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scoreDisplayMode")
    public String scoreDisplayMode;
    public LighthouseAuditResultV5 withScoreDisplayMode(String scoreDisplayMode) {
        this.scoreDisplayMode = scoreDisplayMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public LighthouseAuditResultV5 withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnings")
    public Object warnings;
    public LighthouseAuditResultV5 withWarnings(Object warnings) {
        this.warnings = warnings;
        return this;
    }
}