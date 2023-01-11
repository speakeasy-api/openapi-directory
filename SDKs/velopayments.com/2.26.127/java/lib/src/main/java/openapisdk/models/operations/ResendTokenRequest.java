package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResendTokenRequest {
    public ResendTokenPathParams pathParams;
    public ResendTokenRequest withPathParams(ResendTokenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResendTokenRequest request;
    public ResendTokenRequest withRequest(openapisdk.models.shared.ResendTokenRequest request) {
        this.request = request;
        return this;
    }
}