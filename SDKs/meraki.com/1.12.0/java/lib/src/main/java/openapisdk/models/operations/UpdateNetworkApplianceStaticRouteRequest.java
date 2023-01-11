package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceStaticRouteRequest {
    public UpdateNetworkApplianceStaticRoutePathParams pathParams;
    public UpdateNetworkApplianceStaticRouteRequest withPathParams(UpdateNetworkApplianceStaticRoutePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkApplianceStaticRouteRequestBody request;
    public UpdateNetworkApplianceStaticRouteRequest withRequest(UpdateNetworkApplianceStaticRouteRequestBody request) {
        this.request = request;
        return this;
    }
}