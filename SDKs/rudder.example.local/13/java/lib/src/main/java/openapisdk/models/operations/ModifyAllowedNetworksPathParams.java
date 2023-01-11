package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifyAllowedNetworksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=nodeId")
    public String nodeId;
    public ModifyAllowedNetworksPathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}