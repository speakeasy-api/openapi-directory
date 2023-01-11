package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkClientsApplicationUsagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkClientsApplicationUsagePathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}