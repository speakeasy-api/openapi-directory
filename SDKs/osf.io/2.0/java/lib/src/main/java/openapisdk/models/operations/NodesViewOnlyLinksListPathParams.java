package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesViewOnlyLinksListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public String nodeId;
    public NodesViewOnlyLinksListPathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}