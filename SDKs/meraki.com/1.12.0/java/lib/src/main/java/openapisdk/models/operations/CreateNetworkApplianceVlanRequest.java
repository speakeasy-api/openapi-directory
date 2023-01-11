package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkApplianceVlanRequest {
    public CreateNetworkApplianceVlanPathParams pathParams;
    public CreateNetworkApplianceVlanRequest withPathParams(CreateNetworkApplianceVlanPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateNetworkApplianceVlanRequestBody request;
    public CreateNetworkApplianceVlanRequest withRequest(CreateNetworkApplianceVlanRequestBody request) {
        this.request = request;
        return this;
    }
}