package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLastCveCheck200ApplicationJson {
    @JsonProperty("action")
    public GetLastCveCheck200ApplicationJsonActionEnum action;
    public GetLastCveCheck200ApplicationJson withAction(GetLastCveCheck200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public GetLastCveCheck200ApplicationJsonData data;
    public GetLastCveCheck200ApplicationJson withData(GetLastCveCheck200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public GetLastCveCheck200ApplicationJsonResultEnum result;
    public GetLastCveCheck200ApplicationJson withResult(GetLastCveCheck200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}