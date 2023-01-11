package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetNodesCompliance200ApplicationJson {
    @JsonProperty("action")
    public GetNodesCompliance200ApplicationJsonActionEnum action;
    public GetNodesCompliance200ApplicationJson withAction(GetNodesCompliance200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public GetNodesCompliance200ApplicationJsonData data;
    public GetNodesCompliance200ApplicationJson withData(GetNodesCompliance200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public GetNodesCompliance200ApplicationJsonResultEnum result;
    public GetNodesCompliance200ApplicationJson withResult(GetNodesCompliance200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}