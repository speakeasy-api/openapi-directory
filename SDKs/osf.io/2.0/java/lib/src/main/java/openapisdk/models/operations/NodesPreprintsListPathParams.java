package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesPreprintsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public String nodeId;
    public NodesPreprintsListPathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}