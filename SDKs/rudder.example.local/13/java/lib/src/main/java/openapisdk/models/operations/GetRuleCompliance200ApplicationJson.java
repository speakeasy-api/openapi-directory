package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetRuleCompliance200ApplicationJson {
    @JsonProperty("action")
    public GetRuleCompliance200ApplicationJsonActionEnum action;
    public GetRuleCompliance200ApplicationJson withAction(GetRuleCompliance200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public GetRuleCompliance200ApplicationJsonData data;
    public GetRuleCompliance200ApplicationJson withData(GetRuleCompliance200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public GetRuleCompliance200ApplicationJsonResultEnum result;
    public GetRuleCompliance200ApplicationJson withResult(GetRuleCompliance200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}