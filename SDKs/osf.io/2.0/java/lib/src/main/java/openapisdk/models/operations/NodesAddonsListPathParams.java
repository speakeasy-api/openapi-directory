package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesAddonsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public String nodeId;
    public NodesAddonsListPathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}