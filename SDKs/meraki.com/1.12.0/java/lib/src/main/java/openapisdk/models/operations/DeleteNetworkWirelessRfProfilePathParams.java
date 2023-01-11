package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteNetworkWirelessRfProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public DeleteNetworkWirelessRfProfilePathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rfProfileId")
    public String rfProfileId;
    public DeleteNetworkWirelessRfProfilePathParams withRfProfileId(String rfProfileId) {
        this.rfProfileId = rfProfileId;
        return this;
    }
}