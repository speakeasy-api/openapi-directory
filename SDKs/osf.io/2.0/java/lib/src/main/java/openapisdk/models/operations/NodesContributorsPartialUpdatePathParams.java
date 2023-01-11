package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesContributorsPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public String nodeId;
    public NodesContributorsPartialUpdatePathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public String userId;
    public NodesContributorsPartialUpdatePathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}