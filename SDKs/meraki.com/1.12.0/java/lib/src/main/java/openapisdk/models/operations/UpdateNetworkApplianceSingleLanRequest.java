package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceSingleLanRequest {
    public UpdateNetworkApplianceSingleLanPathParams pathParams;
    public UpdateNetworkApplianceSingleLanRequest withPathParams(UpdateNetworkApplianceSingleLanPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkApplianceSingleLanRequestBody request;
    public UpdateNetworkApplianceSingleLanRequest withRequest(UpdateNetworkApplianceSingleLanRequestBody request) {
        this.request = request;
        return this;
    }
}