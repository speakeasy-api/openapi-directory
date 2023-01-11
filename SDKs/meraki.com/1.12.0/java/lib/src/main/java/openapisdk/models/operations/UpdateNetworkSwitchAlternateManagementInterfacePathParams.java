package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSwitchAlternateManagementInterfacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkSwitchAlternateManagementInterfacePathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}