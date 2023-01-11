package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesContributorsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public String nodeId;
    public NodesContributorsReadPathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public String userId;
    public NodesContributorsReadPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}