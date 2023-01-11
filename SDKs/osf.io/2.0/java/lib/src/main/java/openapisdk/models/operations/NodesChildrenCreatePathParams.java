package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesChildrenCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public String nodeId;
    public NodesChildrenCreatePathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}