package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnregisterMfaForSelfRequest {
    public UnregisterMfaForSelfHeaders headers;
    public UnregisterMfaForSelfRequest withHeaders(UnregisterMfaForSelfHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SelfMfaTypeUnregisterRequest request;
    public UnregisterMfaForSelfRequest withRequest(openapisdk.models.shared.SelfMfaTypeUnregisterRequest request) {
        this.request = request;
        return this;
    }
}