package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCveCheckConfiguration200ApplicationJson {
    @JsonProperty("action")
    public GetCveCheckConfiguration200ApplicationJsonActionEnum action;
    public GetCveCheckConfiguration200ApplicationJson withAction(GetCveCheckConfiguration200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public GetCveCheckConfiguration200ApplicationJsonData data;
    public GetCveCheckConfiguration200ApplicationJson withData(GetCveCheckConfiguration200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public GetCveCheckConfiguration200ApplicationJsonResultEnum result;
    public GetCveCheckConfiguration200ApplicationJson withResult(GetCveCheckConfiguration200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}