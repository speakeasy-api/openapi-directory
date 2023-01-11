package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteNetworkSwitchRoutingMulticastRendezvousPointPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public DeleteNetworkSwitchRoutingMulticastRendezvousPointPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rendezvousPointId")
    public String rendezvousPointId;
    public DeleteNetworkSwitchRoutingMulticastRendezvousPointPathParams withRendezvousPointId(String rendezvousPointId) {
        this.rendezvousPointId = rendezvousPointId;
        return this;
    }
}