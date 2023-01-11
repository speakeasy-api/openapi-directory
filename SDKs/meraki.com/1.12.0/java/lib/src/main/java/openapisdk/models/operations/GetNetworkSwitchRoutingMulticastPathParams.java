package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkSwitchRoutingMulticastPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkSwitchRoutingMulticastPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}