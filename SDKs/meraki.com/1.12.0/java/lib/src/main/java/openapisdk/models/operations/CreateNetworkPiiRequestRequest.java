package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkPiiRequestRequest {
    public CreateNetworkPiiRequestPathParams pathParams;
    public CreateNetworkPiiRequestRequest withPathParams(CreateNetworkPiiRequestPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateNetworkPiiRequestRequestBody request;
    public CreateNetworkPiiRequestRequest withRequest(CreateNetworkPiiRequestRequestBody request) {
        this.request = request;
        return this;
    }
}