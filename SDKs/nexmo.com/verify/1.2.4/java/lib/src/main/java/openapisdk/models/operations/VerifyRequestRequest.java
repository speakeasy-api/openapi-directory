package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VerifyRequestRequest {
    public VerifyRequestPathParams pathParams;
    public VerifyRequestRequest withPathParams(VerifyRequestPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public openapisdk.models.shared.VerifyRequest request;
    public VerifyRequestRequest withRequest(openapisdk.models.shared.VerifyRequest request) {
        this.request = request;
        return this;
    }
}