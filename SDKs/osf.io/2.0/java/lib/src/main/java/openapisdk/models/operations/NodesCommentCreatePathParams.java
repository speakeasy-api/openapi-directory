package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesCommentCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public String nodeId;
    public NodesCommentCreatePathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}