package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkClientsUsageHistoriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkClientsUsageHistoriesPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}