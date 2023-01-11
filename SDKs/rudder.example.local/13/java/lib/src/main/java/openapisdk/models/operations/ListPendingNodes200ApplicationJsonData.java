package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListPendingNodes200ApplicationJsonData
 * Information about the nodes
**/
public class ListPendingNodes200ApplicationJsonData {
    @JsonProperty("nodes")
    public openapisdk.models.shared.NodeFull[] nodes;
    public ListPendingNodes200ApplicationJsonData withNodes(openapisdk.models.shared.NodeFull[] nodes) {
        this.nodes = nodes;
        return this;
    }
}