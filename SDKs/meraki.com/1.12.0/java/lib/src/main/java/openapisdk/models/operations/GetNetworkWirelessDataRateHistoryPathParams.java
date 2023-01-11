package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkWirelessDataRateHistoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkWirelessDataRateHistoryPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}