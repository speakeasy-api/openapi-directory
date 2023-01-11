package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesLinkedNodesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public String nodeId;
    public NodesLinkedNodesListPathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}