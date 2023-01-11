package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesDraftRegistrationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public String nodeId;
    public NodesDraftRegistrationsListPathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}