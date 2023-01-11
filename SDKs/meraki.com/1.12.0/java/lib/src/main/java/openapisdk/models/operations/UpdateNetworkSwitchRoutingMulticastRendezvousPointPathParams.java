package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSwitchRoutingMulticastRendezvousPointPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkSwitchRoutingMulticastRendezvousPointPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rendezvousPointId")
    public String rendezvousPointId;
    public UpdateNetworkSwitchRoutingMulticastRendezvousPointPathParams withRendezvousPointId(String rendezvousPointId) {
        this.rendezvousPointId = rendezvousPointId;
        return this;
    }
}