package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=nodeId")
    public String nodeId;
    public UpdateNodePathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}