package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConditionValue
 * The value of the condition.
**/
public class ConditionValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relativeDate")
    public ConditionValueRelativeDateEnum relativeDate;
    public ConditionValue withRelativeDate(ConditionValueRelativeDateEnum relativeDate) {
        this.relativeDate = relativeDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userEnteredValue")
    public String userEnteredValue;
    public ConditionValue withUserEnteredValue(String userEnteredValue) {
        this.userEnteredValue = userEnteredValue;
        return this;
    }
}