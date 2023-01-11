package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkPiiRequestsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkPiiRequestsPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}