package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkWirelessUsageHistoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkWirelessUsageHistoryPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}