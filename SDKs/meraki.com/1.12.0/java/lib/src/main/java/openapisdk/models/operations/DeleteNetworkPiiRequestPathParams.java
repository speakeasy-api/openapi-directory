package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteNetworkPiiRequestPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public DeleteNetworkPiiRequestPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=requestId")
    public String requestId;
    public DeleteNetworkPiiRequestPathParams withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}