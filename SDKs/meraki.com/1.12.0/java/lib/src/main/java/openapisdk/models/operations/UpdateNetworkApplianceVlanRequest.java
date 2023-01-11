package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceVlanRequest {
    public UpdateNetworkApplianceVlanPathParams pathParams;
    public UpdateNetworkApplianceVlanRequest withPathParams(UpdateNetworkApplianceVlanPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkApplianceVlanRequestBody request;
    public UpdateNetworkApplianceVlanRequest withRequest(UpdateNetworkApplianceVlanRequestBody request) {
        this.request = request;
        return this;
    }
}