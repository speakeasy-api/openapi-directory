package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesForksCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public String nodeId;
    public NodesForksCreatePathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}