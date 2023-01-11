package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetNodeCompliance200ApplicationJson {
    @JsonProperty("action")
    public GetNodeCompliance200ApplicationJsonActionEnum action;
    public GetNodeCompliance200ApplicationJson withAction(GetNodeCompliance200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public GetNodeCompliance200ApplicationJsonData data;
    public GetNodeCompliance200ApplicationJson withData(GetNodeCompliance200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public GetNodeCompliance200ApplicationJsonResultEnum result;
    public GetNodeCompliance200ApplicationJson withResult(GetNodeCompliance200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}