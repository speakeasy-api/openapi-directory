package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkWirelessRfProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public CreateNetworkWirelessRfProfilePathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}