package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkWirelessClientsLatencyStatsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkWirelessClientsLatencyStatsPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}