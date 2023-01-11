package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkApplianceStaticRoutePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public CreateNetworkApplianceStaticRoutePathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}