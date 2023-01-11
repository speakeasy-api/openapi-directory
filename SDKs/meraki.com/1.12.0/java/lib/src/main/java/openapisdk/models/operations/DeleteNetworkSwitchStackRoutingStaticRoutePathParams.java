package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteNetworkSwitchStackRoutingStaticRoutePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public DeleteNetworkSwitchStackRoutingStaticRoutePathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=staticRouteId")
    public String staticRouteId;
    public DeleteNetworkSwitchStackRoutingStaticRoutePathParams withStaticRouteId(String staticRouteId) {
        this.staticRouteId = staticRouteId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=switchStackId")
    public String switchStackId;
    public DeleteNetworkSwitchStackRoutingStaticRoutePathParams withSwitchStackId(String switchStackId) {
        this.switchStackId = switchStackId;
        return this;
    }
}