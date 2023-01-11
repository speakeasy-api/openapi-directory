package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConditionalFormatRule
 * A rule describing a conditional format.
**/
public class ConditionalFormatRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("booleanRule")
    public BooleanRule booleanRule;
    public ConditionalFormatRule withBooleanRule(BooleanRule booleanRule) {
        this.booleanRule = booleanRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gradientRule")
    public GradientRule gradientRule;
    public ConditionalFormatRule withGradientRule(GradientRule gradientRule) {
        this.gradientRule = gradientRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ranges")
    public GridRange[] ranges;
    public ConditionalFormatRule withRanges(GridRange[] ranges) {
        this.ranges = ranges;
        return this;
    }
}