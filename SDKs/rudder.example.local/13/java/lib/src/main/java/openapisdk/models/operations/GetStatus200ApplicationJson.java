package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetStatus200ApplicationJson {
    @JsonProperty("action")
    public GetStatus200ApplicationJsonActionEnum action;
    public GetStatus200ApplicationJson withAction(GetStatus200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public GetStatus200ApplicationJsonData data;
    public GetStatus200ApplicationJson withData(GetStatus200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public GetStatus200ApplicationJsonResultEnum result;
    public GetStatus200ApplicationJson withResult(GetStatus200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}