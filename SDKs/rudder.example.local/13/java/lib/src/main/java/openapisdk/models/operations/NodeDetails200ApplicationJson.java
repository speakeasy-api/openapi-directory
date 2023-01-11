package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NodeDetails200ApplicationJson {
    @JsonProperty("action")
    public NodeDetails200ApplicationJsonActionEnum action;
    public NodeDetails200ApplicationJson withAction(NodeDetails200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public NodeDetails200ApplicationJsonData data;
    public NodeDetails200ApplicationJson withData(NodeDetails200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public NodeDetails200ApplicationJsonResultEnum result;
    public NodeDetails200ApplicationJson withResult(NodeDetails200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}