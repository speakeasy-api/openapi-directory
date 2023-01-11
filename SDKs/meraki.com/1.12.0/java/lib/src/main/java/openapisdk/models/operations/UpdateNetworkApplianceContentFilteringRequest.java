package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceContentFilteringRequest {
    public UpdateNetworkApplianceContentFilteringPathParams pathParams;
    public UpdateNetworkApplianceContentFilteringRequest withPathParams(UpdateNetworkApplianceContentFilteringPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkApplianceContentFilteringRequestBody request;
    public UpdateNetworkApplianceContentFilteringRequest withRequest(UpdateNetworkApplianceContentFilteringRequestBody request) {
        this.request = request;
        return this;
    }
}