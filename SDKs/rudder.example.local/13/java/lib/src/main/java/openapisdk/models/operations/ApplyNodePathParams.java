package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApplyNodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=nodeId")
    public String nodeId;
    public ApplyNodePathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}