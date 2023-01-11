package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkWirelessSignalQualityHistoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkWirelessSignalQualityHistoryPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}