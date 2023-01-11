package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesContributorsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public String nodeId;
    public NodesContributorsListPathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}