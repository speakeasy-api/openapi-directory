package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PayorCreateApiKeyRequestRequest {
    public PayorCreateApiKeyRequestPathParams pathParams;
    public PayorCreateApiKeyRequestRequest withPathParams(PayorCreateApiKeyRequestPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PayorCreateApiKeyRequest request;
    public PayorCreateApiKeyRequestRequest withRequest(openapisdk.models.shared.PayorCreateApiKeyRequest request) {
        this.request = request;
        return this;
    }
}