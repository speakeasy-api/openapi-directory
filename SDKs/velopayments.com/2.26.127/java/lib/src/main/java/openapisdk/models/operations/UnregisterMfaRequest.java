package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnregisterMfaRequest {
    public UnregisterMfaPathParams pathParams;
    public UnregisterMfaRequest withPathParams(UnregisterMfaPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UnregisterMfaRequest request;
    public UnregisterMfaRequest withRequest(openapisdk.models.shared.UnregisterMfaRequest request) {
        this.request = request;
        return this;
    }
}