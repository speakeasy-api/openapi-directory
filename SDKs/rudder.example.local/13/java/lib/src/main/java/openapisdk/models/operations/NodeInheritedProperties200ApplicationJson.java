package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NodeInheritedProperties200ApplicationJson {
    @JsonProperty("action")
    public NodeInheritedProperties200ApplicationJsonActionEnum action;
    public NodeInheritedProperties200ApplicationJson withAction(NodeInheritedProperties200ApplicationJsonActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonProperty("data")
    public openapisdk.models.shared.NodeInheritedProperties[] data;
    public NodeInheritedProperties200ApplicationJson withData(openapisdk.models.shared.NodeInheritedProperties[] data) {
        this.data = data;
        return this;
    }
    @JsonProperty("result")
    public NodeInheritedProperties200ApplicationJsonResultEnum result;
    public NodeInheritedProperties200ApplicationJson withResult(NodeInheritedProperties200ApplicationJsonResultEnum result) {
        this.result = result;
        return this;
    }
}