package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetNodesCompliance200ApplicationJsonData {
    @JsonProperty("nodes")
    public GetNodesCompliance200ApplicationJsonDataNodes[] nodes;
    public GetNodesCompliance200ApplicationJsonData withNodes(GetNodesCompliance200ApplicationJsonDataNodes[] nodes) {
        this.nodes = nodes;
        return this;
    }
}