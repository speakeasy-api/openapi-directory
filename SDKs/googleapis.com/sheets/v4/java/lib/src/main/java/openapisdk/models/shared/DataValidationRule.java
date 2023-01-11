package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataValidationRule
 * A data validation rule.
**/
public class DataValidationRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition")
    public BooleanCondition condition;
    public DataValidationRule withCondition(BooleanCondition condition) {
        this.condition = condition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputMessage")
    public String inputMessage;
    public DataValidationRule withInputMessage(String inputMessage) {
        this.inputMessage = inputMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("showCustomUi")
    public Boolean showCustomUi;
    public DataValidationRule withShowCustomUi(Boolean showCustomUi) {
        this.showCustomUi = showCustomUi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("strict")
    public Boolean strict;
    public DataValidationRule withStrict(Boolean strict) {
        this.strict = strict;
        return this;
    }
}