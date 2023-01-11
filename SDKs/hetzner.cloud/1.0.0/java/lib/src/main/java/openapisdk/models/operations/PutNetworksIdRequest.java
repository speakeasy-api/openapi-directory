package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutNetworksIdRequest {
    public PutNetworksIdPathParams pathParams;
    public PutNetworksIdRequest withPathParams(PutNetworksIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutNetworksIdUpdateNetworkRequest request;
    public PutNetworksIdRequest withRequest(PutNetworksIdUpdateNetworkRequest request) {
        this.request = request;
        return this;
    }
}