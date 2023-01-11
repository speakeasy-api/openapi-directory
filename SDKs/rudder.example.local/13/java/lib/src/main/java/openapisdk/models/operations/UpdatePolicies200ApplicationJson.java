package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdatePolicies200ApplicationJson {
    @JsonProperty("action")
    public UpdatePolicies200ApplicationJsonActionEnum action;
    public UpdatePolicies200ApplicationJson withAction(UpdatePolicies200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public UpdatePolicies200ApplicationJsonData data;
    public UpdatePolicies200ApplicationJson withData(UpdatePolicies200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public UpdatePolicies200ApplicationJsonResultEnum result;
    public UpdatePolicies200ApplicationJson withResult(UpdatePolicies200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}