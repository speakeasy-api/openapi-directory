package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetNodesStatus200ApplicationJsonData
 * List of nodeId and associated status
**/
public class GetNodesStatus200ApplicationJsonData {
    @JsonProperty("nodes")
    public GetNodesStatus200ApplicationJsonDataNodes[] nodes;
    public GetNodesStatus200ApplicationJsonData withNodes(GetNodesStatus200ApplicationJsonDataNodes[] nodes) {
        this.nodes = nodes;
        return this;
    }
}