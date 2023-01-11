package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceWarmSpareRequest {
    public UpdateNetworkApplianceWarmSparePathParams pathParams;
    public UpdateNetworkApplianceWarmSpareRequest withPathParams(UpdateNetworkApplianceWarmSparePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkApplianceWarmSpareRequestBody request;
    public UpdateNetworkApplianceWarmSpareRequest withRequest(UpdateNetworkApplianceWarmSpareRequestBody request) {
        this.request = request;
        return this;
    }
}