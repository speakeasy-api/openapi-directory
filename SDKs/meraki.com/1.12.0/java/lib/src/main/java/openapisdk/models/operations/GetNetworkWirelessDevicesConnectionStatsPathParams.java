package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkWirelessDevicesConnectionStatsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkWirelessDevicesConnectionStatsPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}