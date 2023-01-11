package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesChildrenListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public String nodeId;
    public NodesChildrenListPathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}