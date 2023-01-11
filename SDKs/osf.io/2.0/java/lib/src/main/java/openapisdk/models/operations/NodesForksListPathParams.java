package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesForksListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public String nodeId;
    public NodesForksListPathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}