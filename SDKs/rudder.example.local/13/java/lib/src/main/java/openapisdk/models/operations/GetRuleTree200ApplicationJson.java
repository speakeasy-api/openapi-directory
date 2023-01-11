package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetRuleTree200ApplicationJson {
    @JsonProperty("action")
    public GetRuleTree200ApplicationJsonActionEnum action;
    public GetRuleTree200ApplicationJson withAction(GetRuleTree200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public GetRuleTree200ApplicationJsonData data;
    public GetRuleTree200ApplicationJson withData(GetRuleTree200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public GetRuleTree200ApplicationJsonResultEnum result;
    public GetRuleTree200ApplicationJson withResult(GetRuleTree200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}