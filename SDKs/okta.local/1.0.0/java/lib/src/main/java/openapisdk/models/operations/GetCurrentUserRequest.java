package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCurrentUserRequest {
    @SpeakeasyMetadata("request:mediaType=application/octet-stream")
    public byte[] request;
    public GetCurrentUserRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}