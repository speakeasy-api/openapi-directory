package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSwitchRoutingMulticastPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkSwitchRoutingMulticastPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}