package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnlockUserRequest {
    public UnlockUserPathParams pathParams;
    public UnlockUserRequest withPathParams(UnlockUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/plain")
    public byte[] request;
    public UnlockUserRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}