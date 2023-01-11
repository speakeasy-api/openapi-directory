package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkRequest {
    public UpdateNetworkPathParams pathParams;
    public UpdateNetworkRequest withPathParams(UpdateNetworkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkRequestBody request;
    public UpdateNetworkRequest withRequest(UpdateNetworkRequestBody request) {
        this.request = request;
        return this;
    }
}