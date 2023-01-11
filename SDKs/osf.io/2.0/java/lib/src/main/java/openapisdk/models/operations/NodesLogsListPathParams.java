package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesLogsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public String nodeId;
    public NodesLogsListPathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}