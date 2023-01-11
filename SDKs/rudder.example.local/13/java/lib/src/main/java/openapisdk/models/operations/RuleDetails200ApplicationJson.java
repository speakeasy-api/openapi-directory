package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RuleDetails200ApplicationJson {
    @JsonProperty("action")
    public RuleDetails200ApplicationJsonActionEnum action;
    public RuleDetails200ApplicationJson withAction(RuleDetails200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public RuleDetails200ApplicationJsonData data;
    public RuleDetails200ApplicationJson withData(RuleDetails200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public RuleDetails200ApplicationJsonResultEnum result;
    public RuleDetails200ApplicationJson withResult(RuleDetails200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}