package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkSwitchRoutingOspfPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkSwitchRoutingOspfPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}