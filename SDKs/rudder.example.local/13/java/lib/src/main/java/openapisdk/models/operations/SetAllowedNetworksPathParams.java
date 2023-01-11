package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetAllowedNetworksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=nodeId")
    public String nodeId;
    public SetAllowedNetworksPathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}