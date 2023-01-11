package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public String nodeId;
    public NodesDeletePathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}