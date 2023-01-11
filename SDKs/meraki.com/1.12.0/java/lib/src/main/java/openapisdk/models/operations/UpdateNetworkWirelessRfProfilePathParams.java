package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkWirelessRfProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkWirelessRfProfilePathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rfProfileId")
    public String rfProfileId;
    public UpdateNetworkWirelessRfProfilePathParams withRfProfileId(String rfProfileId) {
        this.rfProfileId = rfProfileId;
        return this;
    }
}