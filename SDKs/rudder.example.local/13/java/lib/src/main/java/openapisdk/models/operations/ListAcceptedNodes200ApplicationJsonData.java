package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListAcceptedNodes200ApplicationJsonData
 * Information about the nodes
**/
public class ListAcceptedNodes200ApplicationJsonData {
    @JsonProperty("nodes")
    public openapisdk.models.shared.NodeFull[] nodes;
    public ListAcceptedNodes200ApplicationJsonData withNodes(openapisdk.models.shared.NodeFull[] nodes) {
        this.nodes = nodes;
        return this;
    }
}