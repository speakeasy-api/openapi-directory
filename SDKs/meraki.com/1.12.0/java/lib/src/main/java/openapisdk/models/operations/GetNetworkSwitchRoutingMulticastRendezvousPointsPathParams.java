package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkSwitchRoutingMulticastRendezvousPointsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkSwitchRoutingMulticastRendezvousPointsPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}