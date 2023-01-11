package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkSwitchAlternateManagementInterfacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkSwitchAlternateManagementInterfacePathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}