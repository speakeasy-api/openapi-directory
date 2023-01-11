package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateRuleCategory200ApplicationJson {
    @JsonProperty("action")
    public CreateRuleCategory200ApplicationJsonActionEnum action;
    public CreateRuleCategory200ApplicationJson withAction(CreateRuleCategory200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public CreateRuleCategory200ApplicationJsonData data;
    public CreateRuleCategory200ApplicationJson withData(CreateRuleCategory200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public CreateRuleCategory200ApplicationJsonResultEnum result;
    public CreateRuleCategory200ApplicationJson withResult(CreateRuleCategory200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}