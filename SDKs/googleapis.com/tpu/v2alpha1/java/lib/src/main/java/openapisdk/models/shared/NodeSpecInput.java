package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NodeSpecInput
 * Details of the TPU node(s) being requested. Users can request either a single node or multiple nodes. NodeSpec provides the specification for node(s) to be created.
**/
public class NodeSpecInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("node")
    public NodeInput node;
    public NodeSpecInput withNode(NodeInput node) {
        this.node = node;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeId")
    public String nodeId;
    public NodeSpecInput withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public String parent;
    public NodeSpecInput withParent(String parent) {
        this.parent = parent;
        return this;
    }
}