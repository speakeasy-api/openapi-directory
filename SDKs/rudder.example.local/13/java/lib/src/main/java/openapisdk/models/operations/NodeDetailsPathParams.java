package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodeDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=nodeId")
    public String nodeId;
    public NodeDetailsPathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}