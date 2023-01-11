package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesRegistrationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public String nodeId;
    public NodesRegistrationsListPathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}