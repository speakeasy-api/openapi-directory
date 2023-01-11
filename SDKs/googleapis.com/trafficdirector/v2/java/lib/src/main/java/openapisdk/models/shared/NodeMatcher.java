package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NodeMatcher
 * Specifies the way to match a Node. The match follows AND semantics.
**/
public class NodeMatcher {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeId")
    public StringMatcher nodeId;
    public NodeMatcher withNodeId(StringMatcher nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeMetadatas")
    public StructMatcher[] nodeMetadatas;
    public NodeMatcher withNodeMetadatas(StructMatcher[] nodeMetadatas) {
        this.nodeMetadatas = nodeMetadatas;
        return this;
    }
}