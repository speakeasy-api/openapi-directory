package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesContributorsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public String nodeId;
    public NodesContributorsCreatePathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}