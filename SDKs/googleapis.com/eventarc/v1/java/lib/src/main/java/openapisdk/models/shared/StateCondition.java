package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StateCondition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public StateConditionCodeEnum code;
    public StateCondition withCode(StateConditionCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public StateCondition withMessage(String message) {
        this.message = message;
        return this;
    }
}