package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkApplianceStaticRouteRequest {
    public CreateNetworkApplianceStaticRoutePathParams pathParams;
    public CreateNetworkApplianceStaticRouteRequest withPathParams(CreateNetworkApplianceStaticRoutePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateNetworkApplianceStaticRouteRequestBody request;
    public CreateNetworkApplianceStaticRouteRequest withRequest(CreateNetworkApplianceStaticRouteRequestBody request) {
        this.request = request;
        return this;
    }
}