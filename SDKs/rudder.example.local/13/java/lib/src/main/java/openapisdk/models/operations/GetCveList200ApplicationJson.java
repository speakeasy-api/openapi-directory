package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCveList200ApplicationJson {
    @JsonProperty("action")
    public GetCveList200ApplicationJsonActionEnum action;
    public GetCveList200ApplicationJson withAction(GetCveList200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public GetCveList200ApplicationJsonData data;
    public GetCveList200ApplicationJson withData(GetCveList200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public GetCveList200ApplicationJsonResultEnum result;
    public GetCveList200ApplicationJson withResult(GetCveList200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}