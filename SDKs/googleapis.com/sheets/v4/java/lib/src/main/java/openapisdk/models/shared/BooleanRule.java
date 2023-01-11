package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BooleanRule
 * A rule that may or may not match, depending on the condition.
**/
public class BooleanRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition")
    public BooleanCondition condition;
    public BooleanRule withCondition(BooleanCondition condition) {
        this.condition = condition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public CellFormat format;
    public BooleanRule withFormat(CellFormat format) {
        this.format = format;
        return this;
    }
}