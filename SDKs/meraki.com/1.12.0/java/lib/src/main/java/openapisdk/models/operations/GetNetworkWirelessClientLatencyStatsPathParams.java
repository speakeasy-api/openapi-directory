package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkWirelessClientLatencyStatsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=clientId")
    public String clientId;
    public GetNetworkWirelessClientLatencyStatsPathParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkWirelessClientLatencyStatsPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}