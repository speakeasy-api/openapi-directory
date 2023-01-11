package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SufficiencyOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categorical_score")
    public Double categoricalScore;
    public SufficiencyOutput withCategoricalScore(Double categoricalScore) {
        this.categoricalScore = categoricalScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scaled_score")
    public Double scaledScore;
    public SufficiencyOutput withScaledScore(Double scaledScore) {
        this.scaledScore = scaledScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("simple_score")
    public Double simpleScore;
    public SufficiencyOutput withSimpleScore(Double simpleScore) {
        this.simpleScore = simpleScore;
        return this;
    }
}