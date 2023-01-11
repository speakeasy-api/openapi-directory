package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkNetflowRequest {
    public UpdateNetworkNetflowPathParams pathParams;
    public UpdateNetworkNetflowRequest withPathParams(UpdateNetworkNetflowPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkNetflowRequestBody request;
    public UpdateNetworkNetflowRequest withRequest(UpdateNetworkNetflowRequestBody request) {
        this.request = request;
        return this;
    }
}