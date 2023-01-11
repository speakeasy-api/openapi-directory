package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoalEventDetailsEventConditions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comparisonType")
    public String comparisonType;
    public GoalEventDetailsEventConditions withComparisonType(String comparisonType) {
        this.comparisonType = comparisonType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comparisonValue")
    public String comparisonValue;
    public GoalEventDetailsEventConditions withComparisonValue(String comparisonValue) {
        this.comparisonValue = comparisonValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expression")
    public String expression;
    public GoalEventDetailsEventConditions withExpression(String expression) {
        this.expression = expression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchType")
    public String matchType;
    public GoalEventDetailsEventConditions withMatchType(String matchType) {
        this.matchType = matchType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GoalEventDetailsEventConditions withType(String type) {
        this.type = type;
        return this;
    }
}