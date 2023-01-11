package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * NodeDetails200ApplicationJsonData
 * Information about the node
**/
public class NodeDetails200ApplicationJsonData {
    @JsonProperty("nodes")
    public openapisdk.models.shared.NodeFull[] nodes;
    public NodeDetails200ApplicationJsonData withNodes(openapisdk.models.shared.NodeFull[] nodes) {
        this.nodes = nodes;
        return this;
    }
}