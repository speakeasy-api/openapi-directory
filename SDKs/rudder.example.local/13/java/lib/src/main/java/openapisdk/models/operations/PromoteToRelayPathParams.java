package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PromoteToRelayPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=nodeId")
    public String nodeId;
    public PromoteToRelayPathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}