package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkWirelessAlternateManagementInterfacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkWirelessAlternateManagementInterfacePathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}