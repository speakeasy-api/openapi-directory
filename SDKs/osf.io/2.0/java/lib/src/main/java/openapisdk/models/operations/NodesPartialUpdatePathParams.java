package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public String nodeId;
    public NodesPartialUpdatePathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}