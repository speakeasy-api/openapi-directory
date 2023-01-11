package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BindNetworkRequest {
    public BindNetworkPathParams pathParams;
    public BindNetworkRequest withPathParams(BindNetworkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BindNetworkRequestBody request;
    public BindNetworkRequest withRequest(BindNetworkRequestBody request) {
        this.request = request;
        return this;
    }
}