package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkSwitchStackRoutingStaticRoutesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkSwitchStackRoutingStaticRoutesPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=switchStackId")
    public String switchStackId;
    public GetNetworkSwitchStackRoutingStaticRoutesPathParams withSwitchStackId(String switchStackId) {
        this.switchStackId = switchStackId;
        return this;
    }
}