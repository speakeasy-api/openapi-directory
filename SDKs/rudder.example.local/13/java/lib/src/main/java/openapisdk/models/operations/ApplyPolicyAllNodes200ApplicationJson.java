package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ApplyPolicyAllNodes200ApplicationJson {
    @JsonProperty("action")
    public ApplyPolicyAllNodes200ApplicationJsonActionEnum action;
    public ApplyPolicyAllNodes200ApplicationJson withAction(ApplyPolicyAllNodes200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public ApplyPolicyAllNodes200ApplicationJsonData[] data;
    public ApplyPolicyAllNodes200ApplicationJson withData(ApplyPolicyAllNodes200ApplicationJsonData[] data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public ApplyPolicyAllNodes200ApplicationJsonResultEnum result;
    public ApplyPolicyAllNodes200ApplicationJson withResult(ApplyPolicyAllNodes200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}