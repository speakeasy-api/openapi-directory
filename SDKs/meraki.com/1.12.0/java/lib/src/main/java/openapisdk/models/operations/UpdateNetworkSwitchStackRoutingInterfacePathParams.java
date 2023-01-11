package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSwitchStackRoutingInterfacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=interfaceId")
    public String interfaceId;
    public UpdateNetworkSwitchStackRoutingInterfacePathParams withInterfaceId(String interfaceId) {
        this.interfaceId = interfaceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkSwitchStackRoutingInterfacePathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=switchStackId")
    public String switchStackId;
    public UpdateNetworkSwitchStackRoutingInterfacePathParams withSwitchStackId(String switchStackId) {
        this.switchStackId = switchStackId;
        return this;
    }
}