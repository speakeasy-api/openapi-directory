package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetNodesStatus200ApplicationJson {
    @JsonProperty("action")
    public GetNodesStatus200ApplicationJsonActionEnum action;
    public GetNodesStatus200ApplicationJson withAction(GetNodesStatus200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public GetNodesStatus200ApplicationJsonData data;
    public GetNodesStatus200ApplicationJson withData(GetNodesStatus200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public GetNodesStatus200ApplicationJsonResultEnum result;
    public GetNodesStatus200ApplicationJson withResult(GetNodesStatus200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}