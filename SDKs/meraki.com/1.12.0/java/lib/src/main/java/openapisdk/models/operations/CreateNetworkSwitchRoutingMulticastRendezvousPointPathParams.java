package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkSwitchRoutingMulticastRendezvousPointPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public CreateNetworkSwitchRoutingMulticastRendezvousPointPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}