package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteRuleCategory200ApplicationJson {
    @JsonProperty("action")
    public DeleteRuleCategory200ApplicationJsonActionEnum action;
    public DeleteRuleCategory200ApplicationJson withAction(DeleteRuleCategory200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public DeleteRuleCategory200ApplicationJsonData data;
    public DeleteRuleCategory200ApplicationJson withData(DeleteRuleCategory200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public DeleteRuleCategory200ApplicationJsonResultEnum result;
    public DeleteRuleCategory200ApplicationJson withResult(DeleteRuleCategory200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}