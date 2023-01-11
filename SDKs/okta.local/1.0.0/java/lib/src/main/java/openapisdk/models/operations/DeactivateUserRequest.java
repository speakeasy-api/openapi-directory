package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeactivateUserRequest {
    public DeactivateUserPathParams pathParams;
    public DeactivateUserRequest withPathParams(DeactivateUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/plain")
    public byte[] request;
    public DeactivateUserRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}