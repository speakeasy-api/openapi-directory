package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateNode200ApplicationJsonData
 * Information about the node
**/
public class UpdateNode200ApplicationJsonData {
    @JsonProperty("nodes")
    public openapisdk.models.shared.NodeFull[] nodes;
    public UpdateNode200ApplicationJsonData withNodes(openapisdk.models.shared.NodeFull[] nodes) {
        this.nodes = nodes;
        return this;
    }
}