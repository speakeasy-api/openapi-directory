package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkWirelessClientCountHistoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkWirelessClientCountHistoryPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}