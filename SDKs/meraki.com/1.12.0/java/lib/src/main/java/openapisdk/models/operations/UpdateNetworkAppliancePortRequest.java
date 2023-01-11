package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkAppliancePortRequest {
    public UpdateNetworkAppliancePortPathParams pathParams;
    public UpdateNetworkAppliancePortRequest withPathParams(UpdateNetworkAppliancePortPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkAppliancePortRequestBody request;
    public UpdateNetworkAppliancePortRequest withRequest(UpdateNetworkAppliancePortRequestBody request) {
        this.request = request;
        return this;
    }
}