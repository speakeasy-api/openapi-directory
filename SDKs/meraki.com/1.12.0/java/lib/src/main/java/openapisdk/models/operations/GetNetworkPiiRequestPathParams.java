package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkPiiRequestPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkPiiRequestPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=requestId")
    public String requestId;
    public GetNetworkPiiRequestPathParams withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}