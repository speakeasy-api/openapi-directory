package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesProvidersListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public String nodeId;
    public NodesProvidersListPathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}