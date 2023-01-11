package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetRole200ApplicationJson {
    @JsonProperty("action")
    public GetRole200ApplicationJsonActionEnum action;
    public GetRole200ApplicationJson withAction(GetRole200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public GetRole200ApplicationJsonData[] data;
    public GetRole200ApplicationJson withData(GetRole200ApplicationJsonData[] data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public GetRole200ApplicationJsonResultEnum result;
    public GetRole200ApplicationJson withResult(GetRole200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}