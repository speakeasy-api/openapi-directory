package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllowedNetworksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=nodeId")
    public String nodeId;
    public GetAllowedNetworksPathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}