package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesCitationListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public String nodeId;
    public NodesCitationListPathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}