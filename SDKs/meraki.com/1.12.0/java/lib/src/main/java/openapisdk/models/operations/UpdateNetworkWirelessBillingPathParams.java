package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkWirelessBillingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkWirelessBillingPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}