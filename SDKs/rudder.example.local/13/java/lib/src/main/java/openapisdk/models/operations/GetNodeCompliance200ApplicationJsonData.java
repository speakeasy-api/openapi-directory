package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetNodeCompliance200ApplicationJsonData {
    @JsonProperty("nodes")
    public GetNodeCompliance200ApplicationJsonDataNodes[] nodes;
    public GetNodeCompliance200ApplicationJsonData withNodes(GetNodeCompliance200ApplicationJsonDataNodes[] nodes) {
        this.nodes = nodes;
        return this;
    }
}