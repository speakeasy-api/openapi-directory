package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RegeneratePolicies200ApplicationJson {
    @JsonProperty("action")
    public RegeneratePolicies200ApplicationJsonActionEnum action;
    public RegeneratePolicies200ApplicationJson withAction(RegeneratePolicies200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public RegeneratePolicies200ApplicationJsonData data;
    public RegeneratePolicies200ApplicationJson withData(RegeneratePolicies200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public RegeneratePolicies200ApplicationJsonResultEnum result;
    public RegeneratePolicies200ApplicationJson withResult(RegeneratePolicies200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}