package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetSystemInfo200ApplicationJson {
    @JsonProperty("action")
    public GetSystemInfo200ApplicationJsonActionEnum action;
    public GetSystemInfo200ApplicationJson withAction(GetSystemInfo200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public GetSystemInfo200ApplicationJsonData data;
    public GetSystemInfo200ApplicationJson withData(GetSystemInfo200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public GetSystemInfo200ApplicationJsonResultEnum result;
    public GetSystemInfo200ApplicationJson withResult(GetSystemInfo200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}