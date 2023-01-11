package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetAllowedNetworks200ApplicationJson {
    @JsonProperty("action")
    public GetAllowedNetworks200ApplicationJsonActionEnum action;
    public GetAllowedNetworks200ApplicationJson withAction(GetAllowedNetworks200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public GetAllowedNetworks200ApplicationJsonData data;
    public GetAllowedNetworks200ApplicationJson withData(GetAllowedNetworks200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public GetAllowedNetworks200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("result")
    public GetAllowedNetworks200ApplicationJsonResultEnum result;
    public GetAllowedNetworks200ApplicationJson withResult(GetAllowedNetworks200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}