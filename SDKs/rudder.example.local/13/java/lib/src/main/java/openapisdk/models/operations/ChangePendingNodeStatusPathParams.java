package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangePendingNodeStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=nodeId")
    public String nodeId;
    public ChangePendingNodeStatusPathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}