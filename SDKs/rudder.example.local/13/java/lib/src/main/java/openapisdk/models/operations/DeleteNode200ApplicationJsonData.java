package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteNode200ApplicationJsonData
 * Information about the node
**/
public class DeleteNode200ApplicationJsonData {
    @JsonProperty("nodes")
    public openapisdk.models.shared.NodeFull[] nodes;
    public DeleteNode200ApplicationJsonData withNodes(openapisdk.models.shared.NodeFull[] nodes) {
        this.nodes = nodes;
        return this;
    }
}