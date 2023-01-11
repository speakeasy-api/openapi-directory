package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkSwitchRoutingMulticastRendezvousPointPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkSwitchRoutingMulticastRendezvousPointPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rendezvousPointId")
    public String rendezvousPointId;
    public GetNetworkSwitchRoutingMulticastRendezvousPointPathParams withRendezvousPointId(String rendezvousPointId) {
        this.rendezvousPointId = rendezvousPointId;
        return this;
    }
}