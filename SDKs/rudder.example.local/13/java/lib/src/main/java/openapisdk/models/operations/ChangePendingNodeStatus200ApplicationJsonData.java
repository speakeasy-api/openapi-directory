package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ChangePendingNodeStatus200ApplicationJsonData
 * Information about the node
**/
public class ChangePendingNodeStatus200ApplicationJsonData {
    @JsonProperty("nodes")
    public openapisdk.models.shared.NodeFull[] nodes;
    public ChangePendingNodeStatus200ApplicationJsonData withNodes(openapisdk.models.shared.NodeFull[] nodes) {
        this.nodes = nodes;
        return this;
    }
}