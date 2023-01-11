package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnsuspendUserRequest {
    public UnsuspendUserPathParams pathParams;
    public UnsuspendUserRequest withPathParams(UnsuspendUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/plain")
    public byte[] request;
    public UnsuspendUserRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}