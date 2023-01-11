package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetRuleCategoryDetails200ApplicationJson {
    @JsonProperty("action")
    public GetRuleCategoryDetails200ApplicationJsonActionEnum action;
    public GetRuleCategoryDetails200ApplicationJson withAction(GetRuleCategoryDetails200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public GetRuleCategoryDetails200ApplicationJsonData data;
    public GetRuleCategoryDetails200ApplicationJson withData(GetRuleCategoryDetails200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public GetRuleCategoryDetails200ApplicationJsonResultEnum result;
    public GetRuleCategoryDetails200ApplicationJson withResult(GetRuleCategoryDetails200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}