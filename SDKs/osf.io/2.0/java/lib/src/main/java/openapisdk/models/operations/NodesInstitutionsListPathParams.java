package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesInstitutionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public String nodeId;
    public NodesInstitutionsListPathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}