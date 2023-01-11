package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceStaticRoutePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkApplianceStaticRoutePathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=staticRouteId")
    public String staticRouteId;
    public UpdateNetworkApplianceStaticRoutePathParams withStaticRouteId(String staticRouteId) {
        this.staticRouteId = staticRouteId;
        return this;
    }
}