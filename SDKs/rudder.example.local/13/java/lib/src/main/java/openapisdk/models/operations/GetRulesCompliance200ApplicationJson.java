package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetRulesCompliance200ApplicationJson {
    @JsonProperty("action")
    public GetRulesCompliance200ApplicationJsonActionEnum action;
    public GetRulesCompliance200ApplicationJson withAction(GetRulesCompliance200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public GetRulesCompliance200ApplicationJsonData data;
    public GetRulesCompliance200ApplicationJson withData(GetRulesCompliance200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public GetRulesCompliance200ApplicationJsonResultEnum result;
    public GetRulesCompliance200ApplicationJson withResult(GetRulesCompliance200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}