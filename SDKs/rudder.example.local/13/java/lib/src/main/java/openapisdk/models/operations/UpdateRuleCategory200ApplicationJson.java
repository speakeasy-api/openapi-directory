package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateRuleCategory200ApplicationJson {
    @JsonProperty("action")
    public UpdateRuleCategory200ApplicationJsonActionEnum action;
    public UpdateRuleCategory200ApplicationJson withAction(UpdateRuleCategory200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public UpdateRuleCategory200ApplicationJsonData data;
    public UpdateRuleCategory200ApplicationJson withData(UpdateRuleCategory200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public UpdateRuleCategory200ApplicationJsonResultEnum result;
    public UpdateRuleCategory200ApplicationJson withResult(UpdateRuleCategory200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}