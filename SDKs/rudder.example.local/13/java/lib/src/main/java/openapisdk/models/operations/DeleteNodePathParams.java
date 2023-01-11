package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteNodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=nodeId")
    public String nodeId;
    public DeleteNodePathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}