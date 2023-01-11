package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivateUserRequest {
    public ActivateUserPathParams pathParams;
    public ActivateUserRequest withPathParams(ActivateUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ActivateUserQueryParams queryParams;
    public ActivateUserRequest withQueryParams(ActivateUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/plain")
    public byte[] request;
    public ActivateUserRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}