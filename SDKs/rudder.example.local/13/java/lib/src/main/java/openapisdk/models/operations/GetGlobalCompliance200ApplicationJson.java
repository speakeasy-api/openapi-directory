package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetGlobalCompliance200ApplicationJson {
    @JsonProperty("action")
    public GetGlobalCompliance200ApplicationJsonActionEnum action;
    public GetGlobalCompliance200ApplicationJson withAction(GetGlobalCompliance200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public GetGlobalCompliance200ApplicationJsonData data;
    public GetGlobalCompliance200ApplicationJson withData(GetGlobalCompliance200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public GetGlobalCompliance200ApplicationJsonResultEnum result;
    public GetGlobalCompliance200ApplicationJson withResult(GetGlobalCompliance200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}