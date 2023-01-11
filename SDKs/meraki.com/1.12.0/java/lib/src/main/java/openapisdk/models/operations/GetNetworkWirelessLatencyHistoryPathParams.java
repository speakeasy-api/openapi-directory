package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkWirelessLatencyHistoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkWirelessLatencyHistoryPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}