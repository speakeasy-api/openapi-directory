package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SetDataValidationRequest
 * Sets a data validation rule to every cell in the range. To clear validation in a range, call this with no rule specified.
**/
public class SetDataValidationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public GridRange range;
    public SetDataValidationRequest withRange(GridRange range) {
        this.range = range;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rule")
    public DataValidationRule rule;
    public SetDataValidationRequest withRule(DataValidationRule rule) {
        this.rule = rule;
        return this;
    }
}