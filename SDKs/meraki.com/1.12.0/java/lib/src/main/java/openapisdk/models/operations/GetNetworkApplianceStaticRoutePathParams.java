package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkApplianceStaticRoutePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkApplianceStaticRoutePathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=staticRouteId")
    public String staticRouteId;
    public GetNetworkApplianceStaticRoutePathParams withStaticRouteId(String staticRouteId) {
        this.staticRouteId = staticRouteId;
        return this;
    }
}