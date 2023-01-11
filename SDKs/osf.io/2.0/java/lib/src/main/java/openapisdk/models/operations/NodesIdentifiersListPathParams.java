package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesIdentifiersListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public String nodeId;
    public NodesIdentifiersListPathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}