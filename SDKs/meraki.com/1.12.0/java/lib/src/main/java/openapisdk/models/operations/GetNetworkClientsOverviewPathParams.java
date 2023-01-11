package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkClientsOverviewPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkClientsOverviewPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}