package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Graph {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("edges")
    public Edge[] edges;
    public Graph withEdges(Edge[] edges) {
        this.edges = edges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodes")
    public Node[] nodes;
    public Graph withNodes(Node[] nodes) {
        this.nodes = nodes;
        return this;
    }
}