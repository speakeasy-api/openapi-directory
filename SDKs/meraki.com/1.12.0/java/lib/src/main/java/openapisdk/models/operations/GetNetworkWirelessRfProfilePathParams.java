package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkWirelessRfProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkWirelessRfProfilePathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rfProfileId")
    public String rfProfileId;
    public GetNetworkWirelessRfProfilePathParams withRfProfileId(String rfProfileId) {
        this.rfProfileId = rfProfileId;
        return this;
    }
}